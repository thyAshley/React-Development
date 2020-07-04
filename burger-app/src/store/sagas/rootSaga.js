import { takeEvery, take } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { logout, checkAuthTimeOutSaga, authUserSaga } from "./authSaga";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logout);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}
