import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import PropTypes from "prop-types";

const ChartBox = (props) => {
  const { title, number, icon, dataKey, chartData, color, percentage } = props;
  return (
    <div className="flex justify-between h-full chartbox">
      <div className="boxInfo flex-[3] flex flex-col justify-between">
        <div className="flex items-center tile">
          {icon ? (
            <div className="text-xl">
              <ion-icon name="home-outline"></ion-icon>
            </div>
          ) : (
            <div className="text-xl">
              <ion-icon name="home-outline"></ion-icon>
            </div>
          )}
          <span>{title}</span>
        </div>
        <h1 className="text-2xl font-semibold">{number}</h1>
        <Link to={"/"} className={`text-[${color}]`}>
          View all
        </Link>
      </div>
      <div className="chartInfo flex-[2] flex flex-col justify-between ">
        <div className="w-full h-full chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right texts">
          <span
            className={`text-xl font-bold percentage ${
              percentage > 0 ? "text-green-400" : "text-pink-500"
            }`}
          >
            {percentage}%
          </span>
          <span className="text-sm duration">this month</span>
        </div>
      </div>
    </div>
  );
};
ChartBox.propTypes = {
  color: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  dataKey: PropTypes.string,
  percentage: PropTypes.number,
  chartData: PropTypes.array,
  icon: PropTypes.string,
};
export default ChartBox;
