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
  const Roboto = Buffer.from(
    await fetch(
      "https://github.com/openmaptiles/fonts/raw/refs/heads/master/roboto/Roboto-Regular.ttf",
    ).then((res) => res.arrayBuffer()),
  );

  const html: ReactElement = {
    key: "0",
    type: "div",
    props: {
      tw: "flex h-[600px] w-[1200px] flex-col justify-between overflow-hidden bg-zinc-900 p-12 font-[Roboto] text-white",
      children: [
        {
          type: "div",
          props: {
            tw: "flex flex-col space-y-4",
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
                  tw: "max-w-3xl text-2xl text-zinc-300",
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
                  tw: "flex items-center space-x-4",
                  children: [
                    {
                      type: "img",
                      props: {
                        src: `${ASSET_PREFIX}/avatar.jpg`,
                        tw: "h-20 w-20 rounded-full border-2 border-zinc-500",
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
                      tw: "aspect-square h-[250px] w-[250px] rotate-3 rounded-2xl bg-zinc-800 object-cover",
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
        data: Roboto.buffer,
        style: "normal",
      },
    ],
  });

  const imageFile = Buffer.from(await image.arrayBuffer());

  writeFileToDist(path, imageFile);
};
