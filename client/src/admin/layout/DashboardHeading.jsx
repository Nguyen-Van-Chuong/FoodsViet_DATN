import React from "react";

const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="flex items-start justify-between mb-10">
      <div>
        <h1 className="font-bold text-[36px] leading-[1px] mb-10">{title}</h1>
        <p className="text-base leading-6">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
