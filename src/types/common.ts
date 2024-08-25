export type User = {
  id?: number;
  username: string;
  email: string;
  created_at?: string;
};

export type Data = {
  id?: number;
  user_id: number;
  data: string;
  created_at?: string;
};

export type ProfileType = User & { data: Data[] };

export type UserRegistration = User & { password: string; data: string };

export type Login = {
  username: string;
  password: string;
};

export enum NotificationTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

export type NotificationState = {
  message: string;
  type: NotificationTypeEnum;
};
