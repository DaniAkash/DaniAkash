import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { ASSET_PREFIX } from "../constants/asset-prefix";

export const getOGImage = async ({
  title,
  description,
}: {
  title: string;
  description: string;
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
      tw: "flex h-full w-full flex-col items-center justify-center bg-zinc-900 font-[Roboto] text-white",
      children: [
        {
          key: "1",
          type: "span",
          props: {
            tw: "text-[48px]",
            children: title,
          },
        },
        {
          key: "2",
          type: "span",
          props: {
            tw: "mt-4 text-[24px]",
            children: description,
          },
        },
        {
          key: "3",
          type: "div",
          props: {
            tw: "mt-4 flex items-center justify-center gap-2",
            children: [
              {
                key: "4",
                type: "img",
                props: {
                  tw: "h-7 w-7 rounded-full",
                  src: `${ASSET_PREFIX}/avatar.jpg`,
                },
              },
              {
                key: "5",
                type: "span",
                props: {
                  tw: "ml-2 text-[20px]",
                  children: ["Dani Akash"],
                },
              },
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

  return imageFile;
};
