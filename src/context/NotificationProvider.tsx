'use client';
import React, { ReactNode, useState } from 'react';

import { NotificationState } from '@/src/types/common';
import Notification from '@/src/components/Notification';

import { NotificationContext } from './NotificationContext';

type Props = {
  children: ReactNode;
};

const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );
  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
