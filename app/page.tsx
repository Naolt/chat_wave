'use client';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from '@/node_modules/next/navigation';

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();

  if (userId) {
    router.replace(`/chat/${'empty'}`);
  }
  if (!userId) {
    router.replace(`/sign-in`);
  }
  return <div></div>;
}
