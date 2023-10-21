import { loginRequest } from "../../sagas/admin/adminSlice";
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
const schemaValidate = Yup.object({
  user_name: Yup.string(),
  // .required("Vui lòng nhập tên đăng nhập!")
  // .max(20, "Tên tài khoản không được dài quá 20 ký tự")
  // .min(6, "Tên đăng nhập phải lớn hơn 6 kí tự"),
  password: Yup.string(),
  // .required("Vui lòng nhập mật khẩu!")
  // .min(6, "Mật khẩu có ít nhất 8 ký tự!")
  // .max(20, "Mật khẩu không được dài quá 20 ký tự")
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   "Mật khẩu cần có ít nhất 1 ký tự in hoa, 1 ký tự thường, 1 số và 1 ký tự đặt biệt!"
  // ),
});
const LoginPage = () => {
  const { token: adminToken, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
    control,
  } = useForm({ resolver: yupResolver(schemaValidate), mode: "onBlur" });

  const handleSignIn = (values) => {
    try {
      if (isValid) {
        dispatch(loginRequest(values));
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (adminToken) {
      navigate("/admin");
    }
  }, [adminToken]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Quản trị viên
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(handleSignIn)}>
          <div className="mb-2">
            <label
              htmlFor="user_name"
              className="block text-sm font-semibold text-gray-800"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="user_name"
              {...register("user_name")}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              {...register("password")}
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Quên mật khẩu?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
