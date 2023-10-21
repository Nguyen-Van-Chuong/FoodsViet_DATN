import axios from "../../axios-interceptor/api";
const COLLECTION_NAME = "admin";
export function loginAdmin(entity) {
  return axios.post(`/${COLLECTION_NAME}/login`, entity);
}
export function registerAdmin(entity) {
  return axios.post(`/${COLLECTION_NAME}/register`, entity);
}
export function logoutAuthAdmin(entity) {
  return axios.post(`/${COLLECTION_NAME}/logout`, entity);
}
