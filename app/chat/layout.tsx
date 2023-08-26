"use client";
import ChatList from "@/components/ChatList";
import React from "react";
import { useRouter } from "@/node_modules/next/navigation";
import { usePathname } from "@/node_modules/next/navigation";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname == "/chat") {
    router.replace(`/chat/${"empty"}`);
  }
  return (
    <div className="w-screen h-screen flex">
      <ChatList />
      {children}
    </div>
  );
};

export default ChatLayout;
