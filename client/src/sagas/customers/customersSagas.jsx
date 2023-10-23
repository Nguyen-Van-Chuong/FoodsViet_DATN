import { takeLatest } from "redux-saga/effects";
import {
  handleDeleteUser,
  handleGetAllCustomers,
  handleGetDetailCustomer,
  handleCreateUser,
  handleUpdateCustomers,
  handleUpdateUser,
} from "./handles";
import {
  customerDetailRequest,
  customersRequest,
  deleteUserRequest,
  creatUserRequest,
  updateCustomerRequest,
  updateUserRequest,
} from "./customersSlice";

export default function* customersSagas() {
  yield takeLatest(customerDetailRequest.type, handleGetDetailCustomer);
  yield takeLatest(customersRequest.type, handleGetAllCustomers);
  yield takeLatest(updateCustomerRequest.type, handleUpdateCustomers);
  yield takeLatest(deleteUserRequest.type, handleDeleteUser);
  yield takeLatest(creatUserRequest.type, handleCreateUser);
  yield takeLatest(updateUserRequest.type, handleUpdateUser);
}
