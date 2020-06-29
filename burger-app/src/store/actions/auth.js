import axios from "axios";

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

export const auth = (email, password, method) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBO7MCQ06VT-stLeTijz9rGXpBeT-j-rY";

    if (method === true) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBO7MCQ06VT-stLeTijz9rGXpBeT-j-rY";
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(authFail(err));
      });
  };
};
