export enum UserTypes {
  GET_USERS = 'GET_USERS',
}

export interface IUserState {
  usersList: IUser[];
}

export interface IUser {
  name: string | undefined;
  email: string | undefined;
}