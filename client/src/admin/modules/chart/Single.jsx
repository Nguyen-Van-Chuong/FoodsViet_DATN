import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";
import { singleProduct } from "../../../data";

const Single = (props) => {
  return (
    <div className="flex max-md:flex-col gap-x-5 single">
      <div className="flex-1 view">
        <div className="info">
          <div className="flex items-center gap-2 md:gap-5 topInfo">
            {props.img && (
              <img
                src={props.img}
                className="w-[100px] h-[100px] rounded-2xl"
                alt=""
              />
            )}
            <h1 className="text-lg font-medium md:text-3xl">{props.title}</h1>
            <button className="px-4 py-2 bg-red-400 rounded-md">Update</button>
          </div>
          <div className="text-md details">
            {Object.entries(props.info).map((item) => (
              <div className="my-[30px]" key={item[0]}>
                <span className="title font-semibold mr-2.5 capitalize">
                  {item[0]}
                </span>
                <span className="">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] border-soft-color" />
        <div className="h-[400px] w-[80%] mt-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey) => (
                // eslint-disable-next-line react/jsx-key
                <Line
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="mb-5">Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li
                className="relative pt-[50px] w-[1px] bg-red-400 after:bg-red-400 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-2.5 after:h-2.5 after:rounded-full after:-translate-x-1/2"
                key={activity.text}
              >
                <div className="max-sm:min-w-[300px] max-md:min-w-[400px] max-lg:min-w-[300px] max-xl:min-w-[400px] min-w-[480px] p-[15px] bg-[#f45b6810]">
                  <p className="mb-[5px]">{activity.text}</p>
                  <time className="text-xs">{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
Single.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.object,
  chart: PropTypes.shape({
    dataKeys: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      })
    ),
    data: PropTypes.arrayOf(PropTypes.object),
  }),
  // activities: PropTypes.shape({
  //   time: PropTypes.string,
  //   text: PropTypes.string,
  // }),
};
// type s = {
//   id: number;
//   img: string;
//   title: string;
//   info: object;
//   chart: {
//     dataKeys: {name:string;color:string}[];
//     data: object[]

//   }
//   activities: {time:string;text:string}

// };

export default Single;
