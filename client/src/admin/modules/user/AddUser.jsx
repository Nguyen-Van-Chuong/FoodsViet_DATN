import { useForm } from "react-hook-form";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import DashboardHeading from "../../layout/DashboardHeading";
import { Button } from "../../components/button";
import { InputPasswordToggle } from "../../components/input";
import ImageUpload from "../../components/image/ImageUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  customersRequest,
} from "../../../sagas/customers/customersSlice";
import { getObjectFromLocalStorage } from "../../../utils/localstorage";
const schemaValidate = Yup.object({
  user_name: Yup.string(),
  // .required("Vui lòng nhập tên đăng nhập!")
  // .max(20, "Tên tài khoản không được dài quá 20 ký tự")
  // .min(6, "Tên đăng nhập phải lớn hơn 6 kí tự"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  // .min(6, "Mật khẩu có ít nhất 8 ký tự!")
  // .max(20, "Mật khẩu không được dài quá 20 ký tự")
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   "Mật khẩu cần có ít nhất 1 ký tự in hoa, 1 ký tự thường, 1 số và 1 ký tự đặt biệt!"
  // ),
});
const AddUser = (props) => {
  const { token: admin, infoAdmin } = useSelector((state) => state.admin);
  const tokenAdminLocal = getObjectFromLocalStorage("adminToken");

  const {
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidate),
    mode: "onChange",
    defaultValues: {
      user_name: "",
      email: "",
      password: "",
      image: "",
      full_name: "",
      id_image: "",
      admin: false,
      role: "",
      address: "",
    },
  });
  const watchAdmin = watch("admin");
  const watchRole = watch("role");

  const dispatch = useDispatch();

  const addHandlerUser = (values) => {
    try {
      if (values) {
        dispatch(createUser({ admin, values }));
        reset({
          user_name: "",
          email: "",
          password: "",
          image: "",
          full_name: "",
          id_image: "",
          admin: false,
          role: "",
          address: "",
        });
      }
    } catch (error) {}
  };
  return (
    <>
      <DashboardHeading
        title="Người dùng"
        desc="Thêm người dùng"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(addHandlerUser)}>
        <div className="w-[150px] sm:w-[200px] mx-auto mb-4 sm:mb-10">
          <ImageUpload className="!rounded-full"></ImageUpload>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tên đăng nhập</Label>
            <Input
              control={control}
              placeholder="Nhập tên đăng nhập..."
              name="user_name"
            ></Input>
            <p>{errors.user_name?.message}</p>
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              placeholder="Nhập email..."
              name="email"
              type="email"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tên người dùng</Label>
            <Input
              control={control}
              placeholder="Nhập tên người dùng..."
              name="full_name"
            ></Input>
          </Field>
          <Field>
            <Label>Mật khẩu</Label>
            <Input
              control={control}
              placeholder="Nhập mật khẩu"
              name="password"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Địa chỉ</Label>
            <Input
              control={control}
              placeholder="Địa chỉ người dùng..."
              name="address"
            ></Input>
          </Field>
        </div>
        {/* <div className="flex mb-4 max-sm:flex-col-reverse md:mb-5 gap-x-5 gap-y-5">
          <Field className="md:flex-1 max-md:pr-20">
            <Label>Admin</Label>
            <Toggle
              on={watchAdmin === true}
              onClick={() => setValue("admin", !watchAdmin)}
            ></Toggle>
          </Field>

          <Field className="flex-1">
            <Label>Role</Label>
            <div className="flex items-center gap-x-5 sm:gap-x-2 md:gap-x-10">
              <Radio
                control={control}
                name={"role"}
                checked={Number(watchRole) === 0}
                onClick={() => setValue("role", "admin")}
                value={0}
              >
                Quản trị viên
              </Radio>
              <Radio
                control={control}
                name={"role"}
                checked={Number(watchRole) === 1}
                onClick={() => setValue("role", "staff")}
                value={1}
              >
                Nhân viên
              </Radio>
              <Radio
                control={control}
                name={"role"}
                checked={Number(watchRole) === 3}
                onClick={() => setValue("role", "user")}
                value={3}
              >
                Người dùng
              </Radio>
            </div>
          </Field>
        </div> */}

        <Button
          type="submit"
          className="mx-auto w-[200px] mt-5 md:mt-14 md:w-[250px]"
          // isLoading={true}
          // disablede={loading}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default AddUser;
