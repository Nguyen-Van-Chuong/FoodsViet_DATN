import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  deletePostRequest,
  deletePostSuccess,
} from "../../../sagas/posts/postsSlice";

const DataTable = (props) => {
  const { token } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (confirm("Bạn có muốn xóa bài viết có id: " + id) == true) {
      dispatch(deletePostSuccess({ token, id }));
    }
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    disableColumnMenu: true,
    sortable: false,
    width: 70,
    renderCell: (params) => {
      return (
        <div className="flex items-center action">
          <Link to={`/admin/${props.slug}/${params.row.id}`}>
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
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="p-5 bg-white dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
