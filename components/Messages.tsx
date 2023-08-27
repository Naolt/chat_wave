import { useGetChatsQuery } from '@/lib/redux/slices/apiSlice';
import { Chat } from '@/lib/types';
import React from 'react';
import ChatBox from './ChatBox';

const Messages = () => {
  const { data: chats, isLoading, isSuccess, isError } = useGetChatsQuery();
  return (
    <div className="bg-white w-full h-full overflow-y-auto-scroll">
      {chats?.map((chat: Chat, index: number) => (
        <ChatBox key={index} {...chat} />
      ))}
    </div>
  );
};

export default Messages;
