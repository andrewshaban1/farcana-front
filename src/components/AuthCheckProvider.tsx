'use client';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/src/context/AuthContext';

const AuthCheckProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    router.push('/');
    return null;
  }

  return children;
};

export default AuthCheckProvider;
