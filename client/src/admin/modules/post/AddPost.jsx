import PropTypes from "prop-types";
import DashboardHeading from "../../layout/DashboardHeading";
import ImageUpload from "../../components/image/ImageUpload";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Dropdown } from "../../components/dropdown";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Toggle } from "../../components/toggle";
import { Radio } from "../../components/checkbox";
import { useSelector } from "react-redux";

const AddPost = (props) => {
  const { categories } = useSelector((state) => state.categories);
  const [selectCategory, setSelectCategory] = useState("");
  const [content, setContent] = useState("");

  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      user_name: "",
      email: "",
      password: "",
      image: "",
      full_name: "",
      id_image: "",
      hot: false,
      address: "",
    },
  });
  const watchHot = watch("hot");
  const watchStatus = watch("status");

  const handleClickOption = (item) => {
    setSelectCategory(item);
  };

  const addHandlerPost = (e) => {};

  return (
    <>
      <DashboardHeading
        title="Bài viết"
        desc="Thêm bài viết"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(addHandlerPost)} className="text-base">
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tiêu đề</Label>
            <Input
              control={control}
              placeholder="Nhập tên đăng nhập..."
              name="user_name"
            ></Input>
          </Field>
          <Field>
            <Label>Đường dẫn</Label>
            <Input
              control={control}
              placeholder="Nhập email..."
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Ảnh</Label>
            <div className="w-full">
              <ImageUpload className=""></ImageUpload>
            </div>
          </Field>
          <Field>
            <Label>Loại bài viết</Label>
            <Dropdown className="w-full ">
              <Dropdown.Select
                placeholder={`${selectCategory.title || "Select category"}`}
              >
                select
              </Dropdown.Select>
              <Dropdown.List >
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item._id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.title}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tác giả</Label>
            <Input
              control={control}
              placeholder="Tác giả"
              name="author"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Nội dung</Label>
            <div className="w-full">
              <ReactQuill
                theme="snow"
                className="text-black bg-white rounded-lg min-h-[200px]"
                value={content}
                // modules={modules}
                onChange={setContent}
              />
            </div>
          </Field>
        </div>
        {/* <div className="grid grid-cols-2 mb-4 max-sm:grid-cols-1 md:mb-5 gap-x-5 gap-y-5"> */}
        <div className="flex mb-4 max-sm:flex-col-reverse md:mb-5 gap-x-5 gap-y-5">
          <Field className="md:flex-1 max-md:pr-20">
            <Label>Hot</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>

          <Field className="flex-1">
            <Label>Trạng thái</Label>
            <div className="flex items-center gap-x-5 sm:gap-x-2 md:gap-x-10">
              <Radio
                control={control}
                name={"status"}
                checked={Number(watchStatus) === 0}
                onClick={() => setValue("status", "approved")}
                value={0}
              >
                cho phép
              </Radio>
              <Radio
                control={control}
                name={"status"}
                checked={Number(watchStatus) === 1}
                onClick={() => setValue("status", "pending")}
                value={1}
              >
                chờ
              </Radio>
              <Radio
                control={control}
                name={"status"}
                checked={Number(watchStatus) === 3}
                onClick={() => setValue("status", "reject")}
                value={3}
              >
                từ chối
              </Radio>
            </div>
          </Field>
        </div>

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
AddPost.propTypes = {
  slug: PropTypes.string,
  columns: PropTypes.array,
  setOpen: PropTypes.func,
};
export default AddPost;
