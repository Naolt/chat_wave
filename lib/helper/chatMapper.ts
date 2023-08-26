import { Chat, Message } from "../types";

export const groupMessagesIntoChats = (messages: Message[]): Chat[] => {
  const chatMapping: { [key: string]: Chat } = {};

  messages.forEach((message) => {
    const chatKey = `${message.senderId}-${message.recipientId}`;

    if (!chatMapping[chatKey]) {
      chatMapping[chatKey] = {
        senderId: message.senderId,
        recipientId: message.recipientId,
        messages: [message],
      };
    } else {
      chatMapping[chatKey].messages.push(message);
    }
  });

  // Sort messages within each chat by timestamp
  Object.values(chatMapping).forEach((chat) => {
    chat.messages.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  });

  return Object.values(chatMapping);
};
