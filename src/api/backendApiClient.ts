import axios from 'axios';

import { Login, ProfileType, User, UserRegistration } from '@/src/types/common';
import config from '@/src/config/defalt.config';

const axiosInstance = axios.create({
  baseURL: config.publicBackEndUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const getProfile = async (id: number) => {
  return await axiosInstance.get<ProfileType>(`profile/${id}`);
};

export const registerUser = async (data: UserRegistration) => {
  return await axiosInstance.post<User>('register', data);
};

export const loginUser = async (data: Login) => {
  return await axiosInstance.post<User>('login', data);
};
