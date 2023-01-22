import React from "react";
import { Fragment } from "react";
import MyCharts from "../charts/Charts";
import PieChart from "../pieChart/PieChart";
import { Menu } from "@headlessui/react";

import { MdModeEdit, MdArrowDropDown } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";

export default function SummarySection() {
  return (
    <div className="  grid   grid-cols-2 gap-0 h-full p-8 w-full">
      <div className=" shadow-2xl  p-2 rounded-lg  ">
        <div className="left side   w-full flex justify-between  items-center  ">
          <p className="text-xl font-semibold ">8 task completed out of 10 </p>
          <div className="flex justify-start items-center gap-2 text-xl">
            <span className="text-iconGrayDefault  ">show :</span>
            <span className="flex justify-start items-center   text-orangeDefault">
              {" "}
              This week
              <MdArrowDropDown className="text-iconGrayDefault w-5 h-5 cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="filling-bar w-full    my-3 bg-grayDefault  rounded-lg">
          <div className="bg-greenDefault w-10/12  p-2 relative  rounded-lg"></div>
        </div>
        <div>
          <p className="text-lg font-semibold px-2 py-3">23 December, Sunday</p>
          <div className="Week View p-2  ">
            <div className="days flex w-full   justify-between font-semibold cursor-pointer">
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                Sun
              </p>
              <p className="text-orangeDefault hover:scale-105 hover:text-black">
                Mon
              </p>
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                {" "}
                Tue
              </p>
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                Wed
              </p>
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                Thu
              </p>
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                Fri
              </p>
              <p className="text-tableGray text-xl hover:scale-105 hover:text-black">
                Sat
              </p>
            </div>
            <div className="date flex  my-7   w-full justify-between  cursor-pointer">
              <div className="w-7 h-7 hover:scale-105 hover:text-black hover:bg-blueDefault  font-semibold bg-orangeDefault rounded-full flex justify-center items-center   ">
                <p className="text-[#fff]  hover:scale-105 hover:text-black text-2xl ">
                  23
                </p>
              </div>
              <p className="hover:scale-105 text-orangeDefault hover:text-black text-2xl">
                24
              </p>
              <p className="hover:scale-105 hover:text-black text-2xl">25</p>
              <p className="hover:scale-105 hover:text-black text-2xl">26</p>
              <p className="hover:scale-105 hover:text-black text-2xl">27</p>
              <p className="hover:scale-105 hover:text-black text-2xl">28</p>
              <p className="hover:scale-105 hover:text-black text-2xl">29</p>
            </div>
            <hr className="text-iconGrayDefault  mt-3" />
          </div>
        </div>

        <div className="2nd Section    ">
          <div className="shadow-2xl my-4  px-4     mx-5 rounded-lg ">
            <div className="flex  w-full justify-between items-center  gap-2">
              <p className="text-lg  my-2 font-semibold  text-tableBlackDefault  ">
                Deilvery of primary obesity management results
              </p>
              <span className="text-base text-iconGrayDefault font-semibold my-1">
                Reminder
              </span>
            </div>
            <span className="text-base  my-3  text-iconGrayDefault   ">
              Due date:{" "}
              <span className="text-tableGray text-xs"> December 23, 2022</span>
            </span>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-2 my-6">
                <img
                  src="https://images.unsplash.com/photo-1671385233154-e1ea05f6b548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  className="w-6  h-6 rounded-full"
                />
                <span className="text-tableGray text-xs font-semibold">
                  George Fields
                </span>
              </div>
              <button
                className="bg-greenDefault 
                             px-3 py-1    
                          rounded-lg text-[#fff] hover:bg-greenButtonHover hover:text-[#000]"
              >
                Completed
              </button>
            </div>
          </div>

          <div className="shadow-2xl px-4   py-3  mx-5 my-4 rounded-lg  ">
            <div className="flex w-full mt-2 justify-between items-center">
              <p className="text-lg font-semibold  text-tableBlackDefault">
                Send homework to do at home
              </p>
              <span className="text-base text-iconGrayDefault font-semibold my-1">
                call
              </span>
            </div>
            <span className="text-base  my-3  text-iconGrayDefault  ">
              Due date :
              <span className="text-tableGray text-xs"> December 23, 2018</span>
            </span>
            <div className="flex justify-between items-center  my-6">
              <div className="flex justify-start items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1671041014656-1c9cbd170653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="Img"
                  className="w-6  h-6 rounded-full"
                />
                <span className="text-tableGray text-xs font-semibold">
                  Rebecca Moore
                </span>
              </div>
              <div className="flex justify-start items-center gap-2 cursor-pointer">
                <BiCircle className="w-5 h-5 text-orangeDefault hover:scale-125 " />
                <BiCircle className="w-5 h-5 text-greenDefault hover:scale-125 " />
                <MdModeEdit className="w-5 h-5 text-iconGrayDefault  hover:text-blueDefault hover:scale-105" />
                <FaTrash className="w-5 h-5  text-iconGrayDefault hover:text-red" />
                <button
                  className="bg-blueDefault  px-8 py-1
                         rounded-lg text-[#fff] hover:text-[#000] hover:bg-blueButtonHover"
                >
                  Ended
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-2xl px-4 py-3  mx-5 my-4 rounded-lg ">
            <div className="flex w-full justify-between items-center">
              <p className="text-base font-semibold  text-tableBlackDefault">
                Office meet-up
              </p>
              <span className="text-sm text-iconGrayDefault font-semibold my-1">
                Event
              </span>
            </div>
            <span className="text-sm   text-iconGrayDefault  ">
              Due date:{" "}
              <span className="text-tableGray text-xs">December 23, 2018</span>{" "}
            </span>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-4 my-6">
                <img
                  src="https://images.unsplash.com/photo-1671040570322-4fd572741609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="w-6  h-6 rounded-full"
                />
                <span className="text-tableGray text-xs font-semibold">
                  Lindsey Stroud
                </span>
              </div>
              <button
                className="bg-greenDefault px-3 py-1 text-[#fff]
                                    rounded-lg hover:text-[#000] hover:bg-greenButtonHover"
              >
                Completed
              </button>
            </div>
          </div>

          <div className=" flex    justify-center items-center text-sm hover:font-medium  text-orangeDefault">
            <span
              className="cursor-pointer mt-5
             hover:text-[#FFB100]"
            >
              Show more
            </span>
          </div>
        </div>
      </div>

      <div className="   gap-5 shadow-2xl p-2 w-full">
        <MyCharts />

        <PieChart />
      </div>
    </div>
  );
}
