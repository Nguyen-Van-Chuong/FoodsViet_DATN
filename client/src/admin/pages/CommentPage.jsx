import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../layout/DataTable";
import AddPost from "../modules/post/AddPost";

const CommentPage = () => {
  const { comments } = useSelector((state) => state.comments);
  const handleDeleteComment = (id) => {
    alert(id);
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
      field: "content",
      type: "string",
      headerName: "Nội dung",
      width: 250,
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
            <Link to={`/admin/users/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
            <div
              className="cursor-pointer delete"
              onClick={() => handleDeleteComment(params.row._id)}
            >
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    },
  ];
  const dataWithId = comments.map((row, index) => ({
    id: index + 1, // Tạo id tùy chỉnh dựa trên index
    ...row,
  }));
  return (
    <div className="users">
      <div className="flex items-center justify-between gap-5 mb-5">
        <h1 className="text-3xl font-bold uppercase">POST</h1>
        <Link
          className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          to={"/admin/posts/add-post"}
        >
          Thêm bài viết
        </Link>
      </div>

      <DataTable slug="posts" columns={columns} rows={dataWithId} />
    </div>
  );
};

export default CommentPage;
