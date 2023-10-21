import { call, put } from "redux-saga/effects";
import { deleteCategory, getAllCaterories } from "./request";
import { getCategoriesSuccess, requestFailure } from "./categoriesSlice";
import { toast } from "react-toastify";

export function* handleGetAllCategories({ payload }) {
  try {
    const response = yield call(getAllCaterories, payload);
    if (response) {
      yield put(getCategoriesSuccess(response.data));
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}

export function* handleDeleteCategory({ payload }) {
  try {
    const response = yield call(deleteCategory, payload.token, payload.id);
    if (response?.data) {
      toast.success(response?.data.message);
    }
  } catch (error) {
    if (error?.code === "ERR_NETWORK") {
      yield put(requestFailure(error));
    } else {
      yield put(requestFailure(error?.response?.data));
    }
  }
}

// export function* registerCustomer({ payload }) {
//     try {
//         const response = yield call(registerAuth, payload);
//         if (response) {
//             yield put(registerSuccess())
//             toast.success(response.data?.message)
//         }

//     } catch (error) {
//         yield put(requestFailure(error.response.data.message));
//     }
// }
