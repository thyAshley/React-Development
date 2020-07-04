import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { logout } from "./authSaga";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logout);
}
