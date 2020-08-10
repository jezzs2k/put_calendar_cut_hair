import { LOGIN, REGISTER, LOGOUT, AUTH_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, };
    case REGISTER:
      return { ...state }
    case LOGOUT:
      return { ...state }
    case AUTH_LOADING:
      return { ...state }
    default:
      return { ...state }
  }
};
