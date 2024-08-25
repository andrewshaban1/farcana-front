import { createContext, useContext } from 'react';

import { User } from '@/src/types/common';

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  logout: () => void;
  login: (value: User) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used withinn AuthProvider');
  }

  return context;
};
