import { getEnv } from "../server/env/env";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText, tool, type Message } from "ai";
import { z } from "zod";
import { findRelevantContent } from "../server/findRelevantContent";

const allowedOrigins = [
  "https://daniakash.com",
  "chrome-extension://",
  "http://localhost",
];

const isAllowedOrigin = (origin?: string | null) =>
  origin && allowedOrigins.some((allowed) => origin.startsWith(allowed));

const setCorsHeaders = (origin: string | null) => {
  const headers = new Headers();
  if (isAllowedOrigin(origin)) {
    headers.set("Access-Control-Allow-Origin", origin!);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return headers;
};

export const onRequestOptions: PagesFunction = async ({ request }) => {
  const origin = request.headers.get("Origin");
  if (isAllowedOrigin(origin)) {
    const corsHeaders = setCorsHeaders(origin);
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  return new Response(null, { status: 400 });
};

export const onRequestPost: PagesFunction = async ({ env, request }) => {
  const { DB_URL, OPENAI_API_KEY } = getEnv(env);

  const contentType = request.headers.get("content-type") || "";
  const origin = request.headers.get("Origin");

  if (isAllowedOrigin(origin)) {
    const corsHeaders = setCorsHeaders(origin);
    if (contentType.includes("application/json")) {
      const json = await request.json();
      const { messages } = json as { messages: Message[] };

      if (messages.length) {
        const openai = createOpenAI({
          compatibility: "strict",
          apiKey: OPENAI_API_KEY,
        });

        const result = await streamText({
          model: openai("gpt-4o"),
          system: `You are a helpful assistant for Dani Akash's portfolio website. You should only answer questions based on the data retrieved using the "getInformation" tool, which queries information exclusively from the website. Do not use any outside knowledge or make assumptions. If no relevant information is found in the tool calls, respond with "Sorry, I don't know."`,
          messages,
          tools: {
            getInformation: tool({
              description: `Query information exclusively from the portfolio website to answer user questions. This tool retrieves data from the website and returns relevant content based on the user's query. If the data does not answer the question, you should not respond.`,
              parameters: z.object({
                question: z.string().describe("the users question"),
              }),
              execute: async ({ question }) =>
                findRelevantContent({
                  userQuery: question,
                  dbUrl: DB_URL,
                  apiKey: OPENAI_API_KEY,
                }),
            }),
          },
        });

        const response = result.toDataStreamResponse();
        corsHeaders.forEach((value, key) => response.headers.set(key, value));
        return response;
      }
    }
  }

  return new Response("Unable to process request", { status: 400 });
};
