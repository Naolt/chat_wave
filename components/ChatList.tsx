'use client';
import { groupMessagesIntoChats } from '@/lib/helper/chatMapper';
import { useGetChatsQuery } from '@/lib/redux/slices/apiSlice';
import { Chat, Message } from '@/lib/types';
import React from 'react';
import ChatBox from './ChatBox';
import { UserButton } from '@clerk/nextjs';

const ChatList: React.FC = () => {
  const { data: chats, isLoading, isSuccess, isError } = useGetChatsQuery();

  return (
    <div className=" bg-white w-full sm:w-2/3 md:w-2/3 lg:w-2/5 h-full overflow-y-auto-scroll">
      <div className="w-full px-5  h-14 flex items-center gap-3 ">
        <UserButton afterSignOutUrl="/" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-sm rounded-3xl py-2 px-5 outline-neutral-200 focus:bg-white bg-neutral-100"
        />
      </div>
      {chats?.map((chat: Chat, index: number) => (
        <ChatBox key={index} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;
