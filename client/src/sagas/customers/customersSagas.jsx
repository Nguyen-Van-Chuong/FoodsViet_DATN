import { takeLatest } from "redux-saga/effects";
import {
  handleDeleteUser,
  handleGetAllCustomers,
  handleGetDetailCustomer,
  handleCreateUser,
  handleUpdateCustomers,
} from "./handles";
import {
  customerDetailRequest,
  customersRequest,
  deleteUser,
  createUser,
  updateCustomerRequest,
} from "./customersSlice";

export default function* customersSagas() {
  yield takeLatest(customerDetailRequest.type, handleGetDetailCustomer);
  yield takeLatest(customersRequest.type, handleGetAllCustomers);
  yield takeLatest(updateCustomerRequest.type, handleUpdateCustomers);
  yield takeLatest(deleteUser.type, handleDeleteUser);
  yield takeLatest(createUser.type, handleCreateUser);
}
