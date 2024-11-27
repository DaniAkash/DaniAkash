import { useChat } from "ai/react";
import { lazy, useState } from "react";
import { AnimatePresence } from "motion/react";
import { ChatWindow } from "./components/chat-window";

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

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        {!isChatOpen && (
          <MessageCircleMoreIcon
            onClick={toggleChat}
            className="fixed bottom-7 right-7 z-40 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-zinc-600 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-300/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <ChatWindow
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            messages={messages}
            toggleChat={toggleChat}
          />
        )}
      </AnimatePresence>
    </>
  );
};
