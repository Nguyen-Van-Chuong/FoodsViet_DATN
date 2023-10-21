import { takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  logout,
  registerRequest,
} from "./adminSlice";
import { authenticateAdmin, logoutAdmin } from "./handles";

export default function* adminSagas() {
  yield takeLatest(loginRequest.type, authenticateAdmin);
  //   yield takeLatest(registerRequest.type, registerCustomer);
  yield takeLatest(logout.type, logoutAdmin);
}
