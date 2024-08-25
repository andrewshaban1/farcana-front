'use client';
import React, { useEffect } from 'react';

import { NotificationTypeEnum } from '@/src/types/common';

interface NotificationProps {
  message: string;
  type: NotificationTypeEnum;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const TypeColor = (type: NotificationTypeEnum) => {
    switch (type) {
      case NotificationTypeEnum.SUCCESS:
        return 'bg-green-500';

      case NotificationTypeEnum.ERROR:
        return 'bg-red-500';
      case NotificationTypeEnum.INFO:
        return 'bg-blue-500';
      default:
        throw new Error(
          `Unacceptable Notification Type. Can only be: ${'bg-blue-500'}`
        );
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-md text-white ${TypeColor(
        type
      )}`}
    >
      <div className="flex items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4">
          ✖️
        </button>
      </div>
    </div>
  );
};

export default Notification;
