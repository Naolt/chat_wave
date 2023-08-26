'use client';
import React, { useState } from 'react';
import ChatBubble from '@/components/ChatBubble';
import { useGetChatByIdQuery, useGetUserByIdQuery } from '@/lib/redux/slices/apiSlice';
import { Chat, Message, User } from '@/lib/types';
import { ImAttachment } from 'react-icons/im';
import { BsMic, BsEmojiSmile, BsFillTelephoneFill } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { ScrollArea } from '@/components/ui/scroll-area';
import EmojiPicker from 'emoji-picker-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SingleChatPage = ({ params }: { params: { id: string } }) => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiOpen = () => {
    setEmojiOpen(true);
  };

  const handleEmojiClose = () => {
    setEmojiOpen(false);
  };

  if (params.id == 'empty') {
    return (
      <div className="w-screen h-screen bg-neutral-800 flex justify-center items-center">
        <span className="text-neutral-100 text-sm px-4 py-1 bg-neutral-500 rounded-3xl">
          {' '}
          Select a chat to start messaging
        </span>
      </div>
    );
  }

  let otherUser: User;

  const { data: chatData, isLoading, isSuccess: chatLoaded } = useGetChatByIdQuery(params.id);
  let chat: Chat = chatData;

  const { data: userData, isSuccess: userLoaded } = useGetUserByIdQuery(chat?.members[0]);
  otherUser = userData;

  return (
    <div className="relative w-screen h-screen bg-slate-800 text-white flex flex-col">
      {/* chats */}
      <div className="w-full h-14 bg-white flex px-4 text-neutral-400 items-center gap-3 shadow-md justify-between">
        <span className="text-neutral-800 flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-blue-400 text-white">
              {otherUser?.username?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          {userLoaded && otherUser?.username}
        </span>
        <span className="flex gap-2">
          <span className="text-2xl text-neutral-400 hover:text-neutral-500 transition-all ease-out">
            <AiOutlineSearch />
          </span>
          <span className="flex text-2xl gap-2 text-neutral-400 hover:text-neutral-500 transition-all ease-out">
            <BsFillTelephoneFill />
          </span>
          <span className="flex text-2xl gap-2 text-neutral-400 hover:text-neutral-500 transition-all ease-out">
            <BiDotsVerticalRounded />
          </span>
        </span>
      </div>

      <ScrollArea className="flex-1 h-fit">
        {chatLoaded
          ? chat.messages.map((message: Message, index: number) => {
              return (
                <div className="py-2 px-2">
                  <ChatBubble {...message} />
                </div>
              );
            })
          : 'Loading...'}
      </ScrollArea>
      {/* message input */}
      <div className="w-full h-12 bg-white flex px-4 text-neutral-400 items-center gap-3 shadow-md ">
        <span className="text-2xl hover:text-neutral-500 transition-all ease-out">
          <ImAttachment />
        </span>
        <span className="relative text-2xl hover:text-neutral-500 transition-all ease-out">
          <span onMouseEnter={() => handleEmojiOpen()}>
            <BsEmojiSmile />
          </span>
          <div
            className={`absolute bottom-11 text-sm ${emojiOpen ? 'block' : 'hidden'} `}
            onMouseLeave={() => handleEmojiClose()}
          >
            <EmojiPicker
              previewConfig={{
                showPreview: false,
              }}
            />
          </div>
        </span>
        <input
          type="text"
          placeholder="Write a message"
          className="flex-1 h-full text-sm outline-none text-neutral-800"
        />

        <span className="text-2xl hover:text-neutral-500 transition-all ease-out">
          <BsMic />
        </span>
        <span className="text-2xl text-blue-400 transition-all ease-out">
          <MdSend />
        </span>
      </div>
    </div>
  );
};

export default SingleChatPage;
