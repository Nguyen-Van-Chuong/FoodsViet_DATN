import { takeLatest } from "redux-saga/effects";
import { handleGetAllCategories, handleDeleteCategory } from "./handles";
import { categoriesRequest, deleteCategory } from "./categoriesSlice";

export default function* categoriesSagas() {
  yield takeLatest(categoriesRequest.type, handleGetAllCategories);
  yield takeLatest(deleteCategory.type, handleDeleteCategory);
}
