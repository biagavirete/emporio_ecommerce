import { action } from 'typesafe-actions'
import { UserTypes, IUser } from './types'

export const getUsers = (payload: IUser) => action(UserTypes.GET_USERS, payload);