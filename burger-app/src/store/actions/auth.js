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

export const auth = (email, password, method) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      apikey;

    if (method === true) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        apikey;
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response.data);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(authFail(err));
      });
  };
};
