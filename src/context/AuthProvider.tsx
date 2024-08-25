'use client';
import React, { ReactNode, useState } from 'react';

import { User } from '@/src/types/common';

import { AuthContext } from './AuthContext';

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const isLoggedIn = !!user?.id;

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
