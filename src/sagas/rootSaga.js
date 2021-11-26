import { all } from "redux-saga/effects";
import loginSaga from "./models/auth";

export default function* mainSaga() {
  yield all([
    loginSaga(),
  ]);
}