import React, { useReducer } from 'react';
import axios from 'axios';

import AuthReducer from './authReducer';
import AuthContext from './authContext';

import { LOGIN, REGISTER, LOGOUT, AUTH_LOADING } from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.token,
    isAuthenticated: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      sloading: state.loafing,
      error: state.error,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
