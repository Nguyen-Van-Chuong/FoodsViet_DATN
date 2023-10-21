import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = (props) => {
  return (
    <>
      {props.loading ? (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute top-1/2 left-1/2"></div>
      ) : (
        <>
          {!props.rows || props.rows.length === 0 ? (
            <div className="-translate-y-1/2 sm:absolute top-1/2 left-1/2 max-sm:mt-[50%]">
              <div className="flex flex-col items-center justify-center gap-y-10">
                <div className="w-24 h-24">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-4xl font-bold leading-3">
                  Không có dữ liệu
                </h1>
              </div>
            </div>
          ) : (
            <div className="dataTable">
              <DataGrid
                className="p-5 bg-white dataGrid"
                rows={props.rows}
                columns={[...props.columns]}
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
          )}
        </>
      )}
    </>
  );
};

export default DataTable;
