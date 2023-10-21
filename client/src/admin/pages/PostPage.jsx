import DataTable from "../layout/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostSuccess } from "../../sagas/posts/postsSlice";

const UserPage = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const { token } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (confirm("Bạn có muốn xóa bài viết có id: " + id) == true) {
      dispatch(deletePostSuccess({ token, id }));
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.image || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 300,
    },
    {
      field: "content",
      type: "string",
      headerName: "Nội dung",
      width: 300,
    },

    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
      valueGetter: (params) => {
        const originalDate = params.row.date;
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
            <Link to={`/admin/posts/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
            <div
              className="cursor-pointer delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    },
  ];
  const dataWithId = posts.map((row, index) => ({
    id: index + 1, // Tạo id tùy chỉnh dựa trên index
    ...row,
  }));
  return (
    <div className="users">
      <div className="flex items-center justify-between gap-5 mb-5 info">
        <h1 className="text-3xl font-bold uppercase">bài viết</h1>
        <Link
          className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          to={"/admin/posts/add-post"}
        >
          Thêm bài viết
        </Link>
      </div>

      <DataTable
        slug="posts"
        loading={loading}
        columns={columns}
        rows={dataWithId}
      />
    </div>
  );
};

export default UserPage;
