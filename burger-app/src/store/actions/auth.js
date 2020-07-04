import axios from "axios";
import * as actionType from "./actionTypes";

import { apikey } from "../../secret";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  return {
    type: actionType.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionType.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
};

export const auth = (email, password, method) => {
  return {
    type: actionType.AUTH_USER,
    email,
    password,
    method,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionType.SET_AUTH_REDIRECT_PATH,
    path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    }
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate > new Date()) {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      dispatch(logout());
    }
  };
};
