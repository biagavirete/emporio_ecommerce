import { UserTypes, IUserState } from './types'

const initialStateUser: IUserState = {
  usersList: []
}

function userReducer(state = initialStateUser, action: any) {
  switch (action.type) {
    case UserTypes.GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default userReducer;