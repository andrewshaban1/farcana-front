'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { NotificationTypeEnum, UserRegistration } from '@/src/types/common';
import { registerUser } from '@/src/api/backendApiClient';
import { useNotificationContext } from '@/src/context/NotificationContext';

const RegistrationForm = () => {
  const router = useRouter();

  const { setNotification } = useNotificationContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>();

  const onSubmit: SubmitHandler<UserRegistration> = async (data) => {
    try {
      await registerUser(data);
      setNotification({
        message: 'Registration successful!',
        type: NotificationTypeEnum.SUCCESS,
      });
      router.push('/login');
    } catch (error: any) {
      setNotification({
        message: error.response.data.message,
        type: NotificationTypeEnum.ERROR,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-4'>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          {...register('username', { required: 'Username is required' })}
          className='border p-2 w-full'
        />
        {errors.username && (
          <span className='text-red-600'>{errors.username.message}</span>
        )}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
          className='border p-2 w-full'
        />
        {errors.email && (
          <span className='text-red-600'>{errors.email.message}</span>
        )}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          className='border p-2 w-full'
        />
        {errors.password && (
          <span className='text-red-600'>{errors.password.message}</span>
        )}
      </div>
      <div>
        <label htmlFor='data'>Data</label>
        <input
          id='data'
          type='text'
          {...register('data', {
            required: 'data is required',
            minLength: {
              value: 6,
              message: 'Data must be at least 6 characters long',
            },
          })}
          className='border p-2 w-full'
        />
        {errors.data && (
          <span className='text-red-600'>{errors.data.message}</span>
        )}
      </div>

      <div className='mt-4'>
        <button type='submit' className='bg-blue-500 text-white p-2 w-full'>
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
