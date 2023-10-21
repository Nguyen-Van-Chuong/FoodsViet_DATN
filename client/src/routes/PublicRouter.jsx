// MainLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { postsRequest } from "../sagas/posts/postsSlice";
import { categoriesRequest } from "../sagas/categories/categoriesSlice";
import { customersRequest } from "../sagas/customers/customersSlice";
import { commentsRequest, setNotify } from "../sagas/comments/commentsSlice";
import { setErrorGlobal, setNotifyGlobal } from "../sagas/global/globalSlice";
import HomePage from "../pages/HomePage";

function PublicRouter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { errorGlobal, notifyGlobal } = useSelector((state) => state.global);
  // useEffect(() => {
  //   if (errorGlobal) toast.error(errorGlobal);
  // }, [errorGlobal]);
  // useEffect(() => {
  //   if (notifyGlobal) toast.success(notifyGlobal);
  // }, [notifyGlobal]);

  const tokenLocal = localStorage.getItem("authToken");
  useEffect(() => {
    dispatch(postsRequest(token || tokenLocal));
    dispatch(categoriesRequest(token || tokenLocal));
    dispatch(customersRequest(token || tokenLocal));
    dispatch(commentsRequest(token || tokenLocal));
    dispatch(setNotify());
    dispatch(setErrorGlobal(""));
    dispatch(setNotifyGlobal(""));
  }, [token, dispatch, tokenLocal, location?.pathname]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/signin");
  }, [token]);
  return <Outlet></Outlet>;
}

export default PublicRouter;
