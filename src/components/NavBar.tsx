'use client';
import React from 'react';
import Link from 'next/link';

import { useAuthContext } from '@/src/context/AuthContext';
import { useNotificationContext } from '@/src/context/NotificationContext';
import { NotificationTypeEnum } from '@/src/types/common';

const NavBar = () => {
  const { setNotification } = useNotificationContext();
  const { isLoggedIn, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    setNotification({
      message: 'Your are logged out!',
      type: NotificationTypeEnum.SUCCESS,
    });
  };
  return (
    <div className='font-roboto text-black flex justify-evenly pb-5'>
      <Link href={'/'}>Main Page</Link>
      {!isLoggedIn && <Link href={'/register'}>Regsiter</Link>}
      {!isLoggedIn && <Link href={'/login'}>Login</Link>}
      {isLoggedIn && <Link href={'/profile'}>Profile</Link>}
      {isLoggedIn && (
        <Link href={''} onClick={handleLogout}>
          Log Out
        </Link>
      )}
    </div>
  );
};

export default NavBar;
