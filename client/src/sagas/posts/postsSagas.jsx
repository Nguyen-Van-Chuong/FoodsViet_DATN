import { takeLatest } from "redux-saga/effects";
import {
  handleDeletePost,
  handleGetAllPosts,
  handleGetDetailPosts,
  handleGetSearchPosts,
  handleLikePost,
  handleUploadImage,
} from "./handles";
import {
  deletePostSuccess,
  likePostRequest,
  postDetailRequest,
  postsRequest,
  searchPostsRequest,
  uploadImageRequest,
} from "./postsSlice";

export default function* postsSagas() {
  yield takeLatest(postsRequest.type, handleGetAllPosts);
  yield takeLatest(likePostRequest.type, handleLikePost);
  yield takeLatest(postDetailRequest.type, handleGetDetailPosts);
  yield takeLatest(searchPostsRequest.type, handleGetSearchPosts);
  yield takeLatest(uploadImageRequest.type, handleUploadImage);
  yield takeLatest(deletePostSuccess.type, handleDeletePost);
}
