import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "./AdminRouter";
import { useEffect } from "react";
import { postsRequest } from "../sagas/posts/postsSlice";
import { categoriesRequest } from "../sagas/categories/categoriesSlice";
import { customersRequest } from "../sagas/customers/customersSlice";
import { setErrorGlobal, setNotifyGlobal } from "../sagas/global/globalSlice";
import { commentsRequest, setNotify } from "../sagas/comments/commentsSlice";
import { getObjectFromLocalStorage } from "../utils/localstorage";

const PrivateRouter = () => {
  const { token: admin, infoAdmin } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const tokenAdminLocal = getObjectFromLocalStorage("authToken");

  useEffect(() => {
    dispatch(postsRequest(admin || tokenAdminLocal));
    dispatch(categoriesRequest(admin || tokenAdminLocal));
    dispatch(customersRequest(admin || tokenAdminLocal));
    dispatch(commentsRequest(admin || tokenAdminLocal));
    dispatch(setNotify());
    dispatch(setErrorGlobal(""));
    dispatch(setNotifyGlobal(""));
  }, [
    admin,
    infoAdmin,
    tokenAdminLocal,
    dispatch,
    navigate,
    location.pathname,
  ]);
  useEffect(() => {
    if (admin) {
      <Navigate to={"admin"}></Navigate>;
    } else {
      <Navigate to={"admin/login"}></Navigate>;
    }
  }, [location?.pathname]);

  return admin &&
    infoAdmin?.admin == "true" &&
    (infoAdmin?.role == "staff" || infoAdmin?.role == "admin") ? (
    <Outlet />
  ) : (
    <Navigate to={"login"}></Navigate>
  );
};

export default PrivateRouter;
