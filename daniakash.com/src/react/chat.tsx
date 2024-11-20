import { useChat } from "ai/react";
import { lazy } from "react";

const MessageCircleMoreIcon = lazy(() =>
  import("./icon/MessageCircleMoreIcon").then((res) => ({
    default: res.MessageCircleMoreIcon,
  })),
);

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "http://localhost:8788/ai",
  });

  return (
    <>
      <MessageCircleMoreIcon className="fixed bottom-7 right-7 z-40 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-zinc-600 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-300/20" />
      <div className="fixed bottom-0 right-0 z-50 flex h-screen min-h-96 w-screen overflow-clip text-zinc-600 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-300/20 xl:bottom-7 xl:right-7 xl:h-[calc(100vh/2)] xl:w-[calc(100vw/3)] xl:min-w-96 xl:max-w-[28rem] xl:rounded-xl">
        <div className="flex flex-1 flex-col items-stretch justify-between">
          <div className="space-y-4 bg-green-500">
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                <div>
                  <div className="font-bold">{m.role}</div>
                  <p>
                    {m.content.length > 0 ? (
                      m.content
                    ) : (
                      <span className="font-light italic">
                        {"calling tool: " + m?.toolInvocations?.[0]?.toolName}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
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
        </div>
      </div>
    </>
  );
};
