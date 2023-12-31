import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";
import authSlice from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import customersSlice from "./customers/customersSlice";
import commentsSlice from "./comments/commentsSlice";
import adminSlice from "./admin/adminSlice";

const reducer = combineReducers({
  global: globalSlice,
  posts: postsSlice,
  categories: categoriesSlice,
  customers: customersSlice,
  comments: commentsSlice,
  auth: authSlice,
  admin: adminSlice,
});

export default reducer;
