import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from "prop-types";

const BarChartBox = (props) => {
  const { title, chartData, color, dataKey } = props;
  return (
    <div className="w-full h-full barchartbox">
      <h1 className="text-xl">{title}</h1>
      <div className="">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
BarChartBox.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  dataKey: PropTypes.string,
  chartData: PropTypes.array,
};
export default BarChartBox;
