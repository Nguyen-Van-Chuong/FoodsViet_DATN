import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../modules/chart/BarChartBox";
import BigChartBox from "../modules/chart/BigChartBox";
import ChartBox from "../modules/chart/ChartBox";
import PieChartBox from "../modules/chart/PieChartBox";
import TopBox from "../modules/chart/TopBox";

const HomePage = () => {
  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 auto-rows-[minmax(120px,auto)] sm:auto-rows-[minmax(180px,auto)] grid-flow-dense">
      <div className="row-span-3 box box1">
        <TopBox></TopBox>{" "}
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="row-span-3 box box4">
        <PieChartBox></PieChartBox>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        {" "}
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="col-span-2 row-span-2 max-sm:hidden box box7">
        <BigChartBox></BigChartBox>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue}></BarChartBox>
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit}></BarChartBox>
      </div>
    </section>
  );
};

export default HomePage;
