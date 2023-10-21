// import { Navigate, Route, Routes } from "react-router-dom";
// import { lazy, useEffect } from "react";
// import MainLayout from "./layout/MainLayout.";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import NotFound404 from "./pages/not-found/NotFound404";

// const InfoUser = lazy(() => import("./pages/InfoUser"));
// const DetailPage = lazy(() => import("./pages/DetailPage"));
// const SignInSignUp = lazy(() => import("./pages/SignInSignUp"));
// const PostPage = lazy(() => import("./pages/PostPage"));
// const CategoryPage = lazy(() => import("./pages/CategoryPage"));
// const SignUp = lazy(() => import("./pages/SignUp"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// const AddNewPosts = lazy(() => import("./pages/AddNewPosts"));
// function Appcopy() {
//   const { token } = useSelector((state) => state.auth);
//   const { errorGlobal, notifyGlobal } = useSelector((state) => state.global);
//   useEffect(() => {
//     if (errorGlobal) toast.error(errorGlobal);
//   }, [errorGlobal]);
//   useEffect(() => {
//     if (notifyGlobal) toast.success(notifyGlobal);
//   }, [notifyGlobal]);
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="/categories" element={<CategoryPage />} />
//           <Route path="/info/:slug" element={<InfoUser />} />
//           <Route path="/detail/:slug" element={<DetailPage />} />
//           <Route path="/posts" element={<PostPage />} />
//           <Route path="/add-post" element={<AddNewPosts />} />
//         </Route>
//         <Route path="/signin" element={<SignInSignUp />} />
//         {!token && <Route path="*" element={<Navigate to="/signin" />} />}
//         <Route path="*" element={<NotFound404></NotFound404>} />
//       </Routes>
//     </div>
//   );
// }

// export default Appcopy;