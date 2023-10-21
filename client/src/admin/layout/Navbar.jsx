import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { infoAdmin } = useSelector((state) => state.admin);
  return (
    <section className="flex items-center justify-between w-full p-5 navbar">
      <div className="font-bold logo">
        <img src="" alt="" />
        <span className="text-2xl">FoodsViet</span>
      </div>
      <div className="flex items-center icons gap-x-5">
        <div className="text-xl">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className="text-xl max-md:hidden md:block">
          <ion-icon name="archive-outline"></ion-icon>
        </div>
        <div className="relative max-md:hidden md:block">
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs bg-red-600 rounded-full z-[1] -right-1 -top-0">
            6
          </span>
          <div className="text-2xl">
            <ion-icon name="download-outline"></ion-icon>
          </div>
        </div>
        <Link className="flex items-center user gap-x-[10px]" to="#">
          <img
            src={infoAdmin.image}
            className="flex-shrink-0 object-cover w-6 h-6 rounded-full"
            alt=""
          />
          <p className="overflow-hidden w-[50px] whitespace-nowrap overflow-ellipsis">
            {infoAdmin.user_name}
          </p>
        </Link>
        <div className="flex items-center justify-center p-2 text-xl rounded-full cursor-pointer transi hover:bg-slate-300 ">
          <ion-icon name="apps-outline"></ion-icon>
        </div>{" "}
      </div>
    </section>
  );
};

export default Navbar;
