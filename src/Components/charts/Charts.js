import React, { PureComponent } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import data from "../../constants/constants";
export default class Example extends PureComponent {
  render() {
    return (
      <div className="w-full  p-2 shadow-2xl rounded-lg ">
        <div className="flex justify-between items-center gap-2     ml-8  ">
          <div>
            <span className="text-lg font-medium  ">Revenue</span>
          </div>
          <div className="flex justify-start items-center gap-2 text-lg">
            <span className="text-iconGrayDefault  ">show :</span>
            <span className="flex justify-start items-center   text-orangeDefault">
              {" "}
              This week
              <MdArrowDropDown className="text-iconGrayDefault w-5 h-5 cursor-pointer" />
            </span>
          </div>
        </div>

        <hr className="text-iconGrayDefault mt-[14px] w-[94%] ml-100     " />

        <div className=" mt-2 flex ml-14  justify-start items-center gap-5">
          {" "}
          <BiCircle className="w-4 h-4  text-orangeDefault " />{" "}
          <span className="text-xl ">Today</span>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              width={50}
              height={10}
              data={data?.revenueDetails}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis dataKey="uv" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#FBB161"
                fill="#EAD8DD"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
