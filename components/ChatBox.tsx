'use client';
import { useGetUserByIdQuery } from '@/lib/redux/slices/apiSlice';
import { Chat, User, Message } from '@/lib/types';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import React from 'react';
import { usePathname } from '@/node_modules/next/navigation';

const ChatBox: React.FC<Chat> = ({ id, members: [member1, member2], messages }) => {
  const pathname = usePathname();
  const isActive = pathname == `/chat/${id}`;
  console.log(pathname);
  const { data, isLoading, isSuccess } = useGetUserByIdQuery(member1);
  const sender: User = data;
  console.log(data);
  const latestMessage: Message = messages[messages.length - 1];

  return (
    <Link
      href={`${id}`}
      className={` w-full px-5 py-3 flex items-center gap-4 transition-all ease-linear 
      ${isActive ? 'bg-blue-400 text-white' : 'hover:bg-neutral-200'}`}
    >
      <div className="w-12 h-12 bg-neutral-500 rounded-full overflow-hidden ">
        {isSuccess && sender?.avatar && (
          <Image
            src={sender.avatar}
            alt="Sender Avatar"
            width={64}
            height={64}
            className="w-16 h-16 object-cover overflow-hidden"
          />
        )}
      </div>
      <div className="flex flex-col justify-between h-full gap-1 flex-1">
        <h4 className="font-semibold">{sender?.username}</h4>
        <p
          className={`${
            isActive ? 'text-white' : ' text-neutral-400'
          } text-clip h-6 overflow-hidden`}
        >
          {latestMessage.content.slice(0, 100)}
        </p>
      </div>
      {/* date and unseen chat count */}
      <div
        className={`flex flex-col justify-between items-end text-xs gap-2 ${
          isActive ? 'text-white' : ' text-neutral-400'
        }`}
      >
        <span>{latestMessage.timestamp.slice(0, 10)}</span>
        <span
          className={`${
            isActive ? 'bg-white text-blue-400' : ' bg-blue-400 text-white'
          }  px-2 py-1 rounded-full text-center`}
        >
          {messages.length}
        </span>
      </div>
    </Link>
  );
};

export default ChatBox;
