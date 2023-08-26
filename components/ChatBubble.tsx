import React from 'react';
import { Message } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatBubble: React.FC<Message> = ({ content, id, recipientId, senderId, seen, timestamp }) => {
  return (
    <div className="flex items-end gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-blue-400">CN</AvatarFallback>
      </Avatar>
      <div className="text-sm flex h-fit text-white px-4 py-4 rounded-3xl max-w-xs bg-neutral-400/[0.3] w-fit">
        {content}
      </div>
    </div>
  );
};

export default ChatBubble;
