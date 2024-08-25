'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Login, NotificationTypeEnum } from '@/src/types/common';
import { useAuthContext } from '@/src/context/AuthContext';
import { loginUser } from '@/src/api/backendApiClient';
import { useNotificationContext } from '@/src/context/NotificationContext';

const LoginForm = () => {
  const router = useRouter();

  const { setNotification } = useNotificationContext();

  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      const response = await loginUser(data);

      if (response?.data) {
        login(response?.data);
        router.push('/profile');
      }

      setNotification({
        message: 'Login successful!',
        type: NotificationTypeEnum.SUCCESS,
      });
    } catch (error: any) {
      setNotification({
        message: error.response.data.message,
        type: NotificationTypeEnum.ERROR,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          {...register('username', {
            required: 'Username is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid username address',
            },
          })}
          className="border p-2 w-full"
        />
        {errors.username && (
          <span className="text-red-600">{errors.username.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          className="border p-2 w-full"
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
      </div>

      <div className="mt-4">
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
