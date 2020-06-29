import * as actionType from "./actionTypes";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionType.AUTH_SUCCESS,
    authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
  };
};
