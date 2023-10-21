import { all, fork } from "redux-saga/effects";
import adminSagas from "./admin/adminSagas";
import authSagas from "./auth/authSagas";
import categoriesSagas from "./categories/categoriesSagas";
import commetsSagas from "./comments/commentsSagas";
import customersSagas from "./customers/customersSagas";
import postsSagas from "./posts/postsSagas";

export default function* rootSaga() {
  yield all([
    fork(adminSagas),
    fork(authSagas),
    fork(postsSagas),
    fork(commetsSagas),
    fork(customersSagas),
    fork(categoriesSagas),
  ]);
}
