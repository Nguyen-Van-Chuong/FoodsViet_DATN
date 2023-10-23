import { call, delay, put, race } from "redux-saga/effects";
import {
  deleteUser,
  getAllCustomers,
  getDetailCustomer,
  createUser,
  updateCustomer,
  updateUser,
} from "./request";
import {
  customerDetailSuccess,
  customersRequest,
  customersSuccess,
  requestFailure,
  createUserSuccess,
  deleteUserSuccess,
  setLoadingCustomer,
} from "./customersSlice";
import { setErrorGlobal, setNotifyGlobal } from "../global/globalSlice";

export function* handleGetDetailCustomer({ payload }) {
  try {
    const response = yield call(getDetailCustomer, payload.token, payload.id);
    if (response) {
      yield put(customerDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(requestFailure(error.response.data.message));
  }
}

export function* handleGetAllCustomers({ payload }) {
  try {
    const response = yield call(getAllCustomers, payload);
    if (response) {
      yield put(customersSuccess(response.data));
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}
export function* handleUpdateCustomers({ payload }) {
  try {
    yield put(setLoadingCustomer(true));

    const { response, timeout } = yield race({
      response: call(updateCustomer, payload?.token, payload?.info),
      timeout: delay(15000), // Chờ 5 giây, bạn có thể thay đổi thời gian tùy ý
    });

    if (timeout) {
      yield put(setErrorGlobal("Quá thời gian"));
      yield put(setLoadingCustomer(false));
      return;
    }

    if (response) {
      try {
        yield put(customersRequest(payload?.token));
      } catch (error) {
        handleCommonError(error);
      }

      try {
        yield put(setNotifyGlobal(response.data?.message));
      } catch (error) {
        handleCommonError(error);
      }
      yield put(setLoadingCustomer(false));
    }
  } catch (error) {
    yield handleCommonError(error);
  }
}

function* handleCommonError(error) {
  console.log("error:", error);
  if (error?.code === "ERR_NETWORK") {
    yield put(requestFailure(error));
    yield put(setErrorGlobal(error?.message));
  } else {
    yield put(requestFailure(error?.response?.data));
    yield put(setErrorGlobal(error?.response?.data?.message));
  }
}
// admin
export function* handleCreateUser({ payload }) {
  try {
    yield put(setNotifyGlobal(""));
    const response = yield call(createUser, payload?.admin, payload?.values);
    if (response) {
      yield put(setNotifyGlobal(response.data?.message));
    }
  } catch (error) {
    yield handleCommonError(error);
  }
}
export function* handleDeleteUser({ payload }) {
  const { token, id } = payload;
  try {
    yield put(setNotifyGlobal(""));
    const response = yield call(deleteUser, token, id);
    if (response) {
      yield put(deleteUserSuccess({ id }));
      yield put(setNotifyGlobal(response.data?.message));
    }
  } catch (error) {
    yield handleCommonError(error);
  }
}
export function* handleUpdateUser({ payload }) {
  try {
    yield put(setNotifyGlobal(""));
    const response = yield call(
      updateUser,
      payload.token,
      payload._id,
      payload.values
    );
    if (response) {
      yield put(setNotifyGlobal(response.data?.message));
    }
  } catch (error) {
    yield handleCommonError(error);
  }
}
