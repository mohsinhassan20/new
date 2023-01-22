import React, { Component } from "react";
import Chart from "react-apexcharts";
import { MdArrowDropDown } from "react-icons/md";
import constants from "../../constants/constants";
const { data } = constants;

const sum = data.reduce(
  (totals, { status }) => {
    if (status === "fat") {
      totals.fat += 1;
    } else if (status === "overweight") {
      totals.overweight += 1;
    } else if (status === "normal") {
      totals.normal += 1;
    }
    return totals;
  },
  { fat: 0, overweight: 0, normal: 0 }
);
class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        labels: ["Overweight", "Normal", "Obesity"],
      },
    };
  }

  render() {
    return (
      <div className="donut   mt-14  rounded-2xl  p-2  shadow-2xl ">
        <div className="flex justify-between items-center    p-2">
          <span className="text-lg text-tableBlackDefault  font-bold ">
            Barometer
          </span>
          <div className="flex justify-start items-center gap-2 text-lg">
            <span className="text-iconGrayDefault  ">show :</span>
            <span className="flex justify-start items-center   text-orangeDefault">
              {" "}
              This week
              <MdArrowDropDown className="text-iconGrayDefault w-5 h-5 cursor-pointer" />
            </span>
          </div>
        </div>
        <hr className="text-iconGrayDefault" />
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="500"
          height="300"
        />
      </div>
    );
  }
}

export default Donut;
