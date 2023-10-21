import { call, put } from "redux-saga/effects";
import { logoutAuthAdmin, registerAdmin, loginAdmin } from "./request";
import {
  requestFailure,
  loginSuccess,
  registerSuccess,
  logout,
  setInfoAdmin,
} from "./adminSlice";
import { setNotifyGlobal } from "../global/globalSlice";

export function* authenticateAdmin({ payload }) {
  try {
    const response = yield call(loginAdmin, payload);
    if (response) {
      const { message, accessToken, ...info } = response.data;

      yield put(setNotifyGlobal(message));
      yield put(loginSuccess(accessToken));
      yield put(setInfoAdmin(info));
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}
export function* logoutAdmin({ payload }) {
  try {
    const response = yield call(logoutAuthAdmin, payload);
    if (response) {
      toast.success("Đăng xuất thành công");
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}
