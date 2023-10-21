import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../sagas/admin/adminSlice";
import { toast } from "react-toastify";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Trang chủ",
        url: "/admin/",
        icon: <ion-icon name="home-outline"></ion-icon>,
      },
      {
        id: 2,
        title: "Cá nhân",
        url: "/admin/users/1",
        icon: <ion-icon name="person-outline"></ion-icon>,
      },
    ],
  },
  {
    id: 2,
    title: "Danh sách",
    listItems: [
      {
        id: 5,
        title: "Loại bài viết",
        url: "/admin/categories",
        icon: <ion-icon name="folder-outline"></ion-icon>,
      },
      {
        id: 4,
        title: "Bài viết",
        url: "/admin/posts",
        icon: <ion-icon name="book-outline"></ion-icon>,
      },
      {
        id: 1,
        title: "Người dùng",
        url: "/admin/users",
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      // {
      //   id: 2,
      //   title: "Sản phẩm",
      //   url: "/admin/products",
      //   icon: <ion-icon name="cart-outline"></ion-icon>,
      // },
      {
        id: 3,
        title: "Bình luận",
        url: "/admin/comments",
        icon: <ion-icon name="cube-outline"></ion-icon>,
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "general",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Elements",
  //       url: "/admin/",
  //       icon: <ion-icon name="grid-outline"></ion-icon>,
  //     },
  //     {
  //       id: 2,
  //       title: "Notes",
  //       url: "/admin/",
  //       icon: <ion-icon name="pencil-outline"></ion-icon>,
  //     },
  //     {
  //       id: 3,
  //       title: "Forms",
  //       url: "/admin/",
  //       icon: <ion-icon name="card-outline"></ion-icon>,
  //     },
  //     {
  //       id: 4,
  //       title: "Calendar",
  //       url: "/admin/",
  //       icon: <ion-icon name="calendar-outline"></ion-icon>,
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Cài đặt",
        url: "/admin/",
        icon: <ion-icon name="settings-outline"></ion-icon>,
      },
      {
        id: 2,
        title: "Sao lưu",
        url: "/admin/",
        icon: <ion-icon name="cloud-download-outline"></ion-icon>,
      },
      {
        id: 3,
        title: "Thống kê",
        url: "/admin/",
        icon: <ion-icon name="map-outline"></ion-icon>,
      },
    ],
  },
  {
    id: 5,
    title: "Khác",
    listItems: [
      {
        id: 2,
        title: "Đăng xuất",
        url: "/admin/",
        onClick: true,
        icon: <ion-icon name="log-out-outline"></ion-icon>,
      },
    ],
  },
];
const Sidebar = () => {
  const dispatch = useDispatch();
  const logoutAdmin = () => {
    dispatch(logout());
    toast.error("Đăng xuất thành công!");
  };
  return (
    <section className="p-1 md:p-2 menu ">
      {menu.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2.5 text-soft-color mb-5"
        >
          <span className="max-md:hidden">{item.title}</span>

          {item.listItems.map((listItems) =>
            listItems.onClick ? (
              <button
                key={listItems.id}
                className="flex items-center p-2 max-md:justify-center gap-x-2 hover:bg-soft-bg"
                onClick={logoutAdmin}
              >
                <div className="flex items-center justify-center text-xl">
                  {listItems.icon}
                </div>
                <span className="hidden text-xs uppercase font-extralight md:block ">
                  {listItems.title}
                </span>
              </button>
            ) : (
              <NavLink
                key={listItems.id}
                to={listItems.url}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center md:max-md:justify-center gap-x-2 p-2 bg-soft-bg"
                    : "flex items-center md:max-md:justify-center gap-x-2 p-2 hover:bg-soft-bg"
                }
              >
                <div className="flex items-center justify-center text-xl">
                  {listItems.icon}
                </div>
                <span className="hidden text-xs uppercase font-extralight md:block">
                  {listItems.title}
                </span>
              </NavLink>
            )
          )}
        </div>
      ))}
      {/* <button onClick={logoutAdmin}>
        <div className="flex items-center justify-center text-xl">
          Đăng xuất
        </div>
        <span className="text-xs uppercase font-extralight max-md:hidden"></span>
      </button> */}
    </section>
  );
};

export default Sidebar;
