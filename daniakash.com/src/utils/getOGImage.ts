import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { ASSET_PREFIX } from "../constants/asset-prefix";
import { writeFileToDist } from "./writeFileToDist";

export const getOGImage = async ({
  title,
  description,
  path,
  cover,
}: {
  title: string;
  description: string;
  path: string;
  cover?: string;
}) => {
  const Roboto = readFileSync(
    join(process.cwd(), "public/fonts/Roboto-Regular.ttf"),
  );

  const html: ReactElement = {
    key: "0",
    type: "div",
    props: {
      tw: "flex h-[600px] w-[1200px] flex-col justify-between overflow-hidden p-16",
      style: {
        fontFamily: "Roboto",
        backgroundColor: "#F3F1EC",
        color: "#17161A",
      },
      children: [
        {
          type: "div",
          props: {
            tw: "flex flex-col gap-4",
            children: [
              {
                type: "h1",
                props: {
                  tw: "text-6xl font-bold leading-tight",
                  children: title,
                },
              },
              {
                type: "p",
                props: {
                  tw: "max-w-3xl text-2xl text-[#5E5B66]",
                  children: description,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "flex items-end justify-between",
            children: [
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-4",
                  children: [
                    {
                      type: "img",
                      props: {
                        src: `${ASSET_PREFIX}/avatar.jpg`,
                        tw: "h-20 w-20 rounded-full",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        tw: "text-3xl font-semibold ml-4",
                        children: "Dani Akash",
                      },
                    },
                  ],
                },
              },
              cover
                ? {
                    type: "img",
                    props: {
                      src: cover,
                      tw: "h-[250px] w-[250px] rounded-[32px] bg-[#E6E3DC]",
                      style: {
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                      },
                    },
                  }
                : null,
            ],
          },
        },
      ],
    },
  };

  const image = new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Roboto",
        data: Roboto,
        style: "normal",
      },
    ],
  });

  const imageFile = Buffer.from(await image.arrayBuffer());

  writeFileToDist(path, imageFile);
};
