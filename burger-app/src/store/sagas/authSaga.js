import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* logout(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationTime");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucceed());
}
