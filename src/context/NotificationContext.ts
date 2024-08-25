import { createContext, useContext } from 'react';

import { NotificationState } from '@/src/types/common';

type NotificationContextType = {
  notification: NotificationState | null;
  setNotification: (value: NotificationState | null) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'useNotificationContext must be used withinn NotificationProvider'
    );
  }

  return context;
};
