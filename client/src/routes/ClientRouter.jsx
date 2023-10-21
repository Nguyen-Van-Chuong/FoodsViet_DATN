import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
// import HomePage from "../pages/HomePage";
// import CategoryPage from "../admin/pages/CategoryPage";
// import InfoUser from "../pages/InfoUser";
// import PostPage from "../pages/PostPage";
// import DetailPage from "../pages/DetailPage";
// import AddNewPosts from "../pages/AddNewPosts";

// import PublicRouter from "./PublicRouter";

const PublicRouter = lazy(() => import("./PublicRouter"));
const InfoUser = lazy(() => import("../pages/InfoUser"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const SignInSignUp = lazy(() => import("../pages/SignInSignUp"));
const PostPage = lazy(() => import("../pages/PostPage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const SignUp = lazy(() => import("../pages/SignUp"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AddNewPosts = lazy(() => import("../pages/AddNewPosts"));

export const CLIENT_ROUTE = {
  path: "",
  element: <MainLayout></MainLayout>,
  children: [
    {
      path: "",
      element: <HomePage></HomePage>,
    },
    {
      path: "categories",
      element: <CategoryPage></CategoryPage>,
    },
    {
      path: "info/:slug",
      element: <InfoUser></InfoUser>,
    },
    { path: "detail/:slug", element: <DetailPage></DetailPage> },
    {
      path: "posts",
      element: <PostPage></PostPage>,
    },
    {
      path: "add-post",
      element: <AddNewPosts></AddNewPosts>,
    },
  ],
};

function Khung({ children }) {
  return <div>{children}</div>;
}
