import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = (props) => {
  return (
    <div className="flex flex-col justify-between h-full piecharrtbox">
      <h1 className="mb-5 text-2xl font-bold">Leads by source</h1>
      <div className="flex justify-center w-full h-full chart">
        <ResponsiveContainer width={"99%"} height={400}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            ></Tooltip>
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options grid grid-cols-2 xl:flex xl:justify-between xl:gap-2.5 text-md gap-5 mb-5">
        {data.map((item) => (
          <div className="flex flex-col items-center option" key={item.name}>
            <div className="flex items-center gap-1">
              <div
                className={`dot w-2.5 h-2.5 rounded-full`}
                style={{ background: item.color }}
              >
                {" "}
              </div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
