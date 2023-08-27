'use client';
import { groupMessagesIntoChats } from '@/lib/helper/chatMapper';
import { useGetChatsQuery } from '@/lib/redux/slices/apiSlice';
import { Chat, Message } from '@/lib/types';
import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { UserButton } from '@clerk/nextjs';
import Tab from './Tab';
import Messages from './Messages';
import Friends from './Friends';
import Requests from './Requests';

const ChatList: React.FC = () => {
  const { data: chats, isLoading, isSuccess, isError } = useGetChatsQuery();
  const [tabState, setTabState] = useState('');

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
      <div className="w-full flex px-8 py-2 gap-2 justify-between ">
        <Tab isActive={tabState} setTabState={setTabState} text="Messages" />
        <Tab isActive={tabState} setTabState={setTabState} text="Requests" />
        <Tab isActive={tabState} setTabState={setTabState} text="Friends" />
      </div>
      {tabState == 'Messages' && <Messages />}
      {tabState == 'Requests' && <Requests />}
      {tabState == 'Friends' && <Friends />}
    </div>
  );
};

export default ChatList;
