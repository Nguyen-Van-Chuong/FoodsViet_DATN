import axios from "../../axios-interceptor/api";
const COLLECTION_NAME = "category";
export function getAllCaterories(token) {
  return axios.get(`/${COLLECTION_NAME}/get_all_categories`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
}
export function deleteCategory(token, id) {
  return axios.delete(`/admin/deleteCategory`, {
    headers: { token: `Bearer ${token}` },
    params: {
      id,
    },
  });
}
// "Content-Type": "multipart/form-data",
