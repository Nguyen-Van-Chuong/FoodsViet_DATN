import { topDealUsers } from "../../../data";

const TopBox = () => {
  return (
    <div className="">
      <h1 className="mb-5 lg:text-2xl">Top deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between listItem mb-[30px]"
          >
            <div className="flex items-center gap-x-2.5 user">
              <img
                src={user.img}
                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <div className="flex flex-col userTexts gap-y-1">
                <span className="text-sm font-normal ">{user.username}</span>
                <span className="text-xs lg:mt-3 md:hidden sm:block">
                  {user.email}
                </span>
              </div>
            </div>
            <div className="font-normal ">${user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
