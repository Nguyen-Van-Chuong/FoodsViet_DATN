import { createBrowserRouter, useNavigate } from "react-router-dom";
import DashboardLayout from "../admin/layout/dashboardLayout";
import HomePage from "../admin/pages/HomePage";
import UserPage from "../admin/pages/UserPage";
import ProductPage from "../admin/pages/ProductPage";
import LoginPage from "../admin/pages/LoginPage";
import PostPage from "../admin/pages/PostPage";
import User from "../admin/modules/user/User";
import Post from "../admin/modules/post/Post";
import AddUser from "../admin/modules/user/AddUser";
import AddPost from "../admin/modules/post/AddPost";
import { useSelector } from "react-redux";
import PrivateRouter from "./PrivateRouter";
import { ADMIN_ROUTE } from "./AdminRouter";
import PublicRouter from "./PublicRouter";
import SignInSignUp from "../pages/SignInSignUp";
import NotFound404 from "../pages/not-found/NotFound404";
import { CLIENT_ROUTE } from "./ClientRouter";

const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <LoginPage />,
  },
  { path: "/signin", element: <SignInSignUp /> },
  { path: "*", element: <NotFound404 /> },
  {
    path: "admin",
    element: <PrivateRouter></PrivateRouter>,
    children: [ADMIN_ROUTE],
  },
  {
    path: "",
    element: <PublicRouter></PublicRouter>,
    children: [CLIENT_ROUTE],
  },
]);

export default router;
