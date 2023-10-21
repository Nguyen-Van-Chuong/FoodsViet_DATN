import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import router from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const { token } = useSelector((state) => state.auth);
  const { errorGlobal, notifyGlobal } = useSelector((state) => state.global);
  useEffect(() => {
    if (errorGlobal) toast.error(errorGlobal);
  }, [errorGlobal]);
  useEffect(() => {
    if (notifyGlobal) toast.success(notifyGlobal);
  }, [notifyGlobal]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
