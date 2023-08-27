export interface User {
  id: string;
  username: string;
  avatar?: string;
  friends: string[];
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: string;
  seen: boolean;
}

export interface Chat {
  id: string;
  members: string[];
  messages: Message[];
}

export interface FriendRequest {
  id: string;
  senderId: string;
  recipientId: string;
  status: 'pending' | 'accepted' | 'rejected';
}
