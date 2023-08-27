'use client';
import ChatList from '@/components/ChatList';
import React from 'react';
import { useRouter } from '@/node_modules/next/navigation';
import { usePathname } from '@/node_modules/next/navigation';
import ReduxProvider from '@/lib/redux/provider';
import { useAuth } from '@clerk/nextjs';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(isLoaded, userId, sessionId, getToken);
  if (pathname == '/chat') {
    router.replace(`/chat/${'empty'}`);
  }
  return (
    <div className="w-screen h-screen flex">
      <ReduxProvider>
        <SignedIn>
          <ChatList />
          {children}
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ReduxProvider>
    </div>
  );
};

export default ChatLayout;
