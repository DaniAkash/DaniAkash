import { useChat } from "ai/react";
import { lazy, useEffect, useRef } from "react";
import { cn } from "../utils/cn";
import { CloseIcon } from "./icon/CloseIcon";

const MessageCircleMoreIcon = lazy(() =>
  import("./icon/MessageCircleMoreIcon").then((res) => ({
    default: res.MessageCircleMoreIcon,
  })),
);

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "http://localhost:8788/ai",
    maxSteps: 3,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <MessageCircleMoreIcon className="fixed bottom-7 right-7 z-40 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-zinc-600 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-300/20" />
      <div className="fixed bottom-0 right-0 z-50 flex h-screen min-h-96 w-screen overflow-clip bg-white text-zinc-600 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-300/20 xl:bottom-7 xl:right-7 xl:h-[calc(100vh/2)] xl:w-[calc(100vw/3)] xl:min-w-96 xl:max-w-[28rem] xl:rounded-xl">
        <div className="relative flex flex-1 flex-col items-stretch justify-between">
          <div className="flex h-full flex-col space-y-4 overflow-auto p-4 xl:space-y-2 xl:p-2">
            {messages.map((m, mIndex) => {
              const isUser = m.role === "user";
              const content = m.content.length > 0 ? m.content : "";
              const isFetchingData = m.toolInvocations?.[0]?.state !== "result";
              const isLastMessage = mIndex === messages.length - 1;
              if (!content && !isFetchingData) return null;
              return (
                <div
                  key={m.id}
                  ref={isLastMessage ? messagesEndRef : undefined}
                  className={cn(
                    "flex flex-col gap-4 whitespace-pre-wrap rounded-xl bg-zinc-50 p-4 shadow-sm dark:bg-black xl:gap-2 xl:p-2",
                    isUser ? "items-end" : "items-start",
                  )}
                >
                  <div className="font-semibold">
                    {!isUser ? "🤖 daniakash.com" : "You"}
                  </div>
                  <p>
                    {content ? (
                      content
                    ) : (
                      <span className="font-light italic">
                        {"⏳ Retrieving Data..."}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-row gap-4 p-4 xl:gap-2 xl:p-2">
              <input
                className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                value={input}
                placeholder="Ask something about Dani..."
                onChange={handleInputChange}
              />
              <button
                className="inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                type="submit"
              >
                Ask
              </button>
            </div>
          </form>

          <button className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-50 p-1 shadow-sm ring-1 ring-zinc-100 dark:bg-black dark:ring-zinc-300/20 xl:left-2 xl:top-2">
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};
