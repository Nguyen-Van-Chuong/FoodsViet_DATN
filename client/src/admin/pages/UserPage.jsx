import { useEffect, useState } from "react";
import DataTable from "../layout/DataTable";
import { userRows } from "../../data";
import AddUser from "../modules/user/AddUser";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../sagas/customers/customersSlice";

const UserPage = () => {
  const { customers, loading } = useSelector((state) => state.customers);
  const { token } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    if (confirm("Bạn có muốn xóa bài viết có id: " + id) == true) {
      dispatch(deleteUser({ token, id }));
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70, disableColumnMenu: true },
    {
      field: "img",
      headerName: "Avatar",
      disableColumnMenu: true,
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.image || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "full_name",
      type: "string",
      headerName: "Tên đầy đủ",
      width: 150,
    },
    {
      field: "user_name",
      type: "string",
      headerName: "Tên đăng nhập",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 150,
    },
    {
      field: "address",
      type: "string",
      headerName: "Địa chỉ",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Ngày tạo",
      width: 150,
      type: "string",
      disableColumnMenu: true,
      valueGetter: (params) => {
        const originalDate = params.row.createdAt;
        const formattedDate = new Date(originalDate).toLocaleDateString();
        return formattedDate;
      },
    },

    {
      field: "action",
      headerName: "Action",
      disableColumnMenu: true,
      sortable: false,
      width: 70,
      renderCell: (params) => {
        return (
          <div className="flex items-center action">
            <Link to={`/admin/users/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
            <div
              className="cursor-pointer delete"
              onClick={() => handleDeleteUser(params.row._id)}
            >
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    },
  ];
  const dataWithId = customers.map((row, index) => ({
    id: index + 1, // Tạo id tùy chỉnh dựa trên index
    ...row,
  }));
  return (
    <div className="users">
      <div className="flex items-center justify-between gap-5 mb-5 info">
        <h1 className="text-3xl font-bold leading-3 uppercase">Người dùng</h1>
        <Link
          className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          to={"/admin/users/add-user"}
        >
          Thêm người dùng
        </Link>
      </div>
      <DataTable
        slug="users"
        loading={loading}
        columns={columns}
        rows={dataWithId}
      />
    </div>
  );
};

export default UserPage;
