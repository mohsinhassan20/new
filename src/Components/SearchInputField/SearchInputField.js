import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";
export default function SearchInputField() {
  return (
    <div className="flex  w-full shadow-2xl  justify-between items-center         2xl:w-full ">
      <div className="px-5 pt-4 pb-2 text-orangeDefault font-Popins text-2xl shadow-2xl rounded-md ">
        Baropet
      </div>
      <>
        <AiOutlineSearch className="ml-5 mt-2 w-6 h-6 text-grayDefault" />
        <input
          type="text"
          className="w-full mr-10 ml-1 p-2 shadow-2xl   rounded-xl   focus:outline-grayDefault"
          placeholder={"search by contact or message"}
        />
      </>
      <VscBellDot className="text-blueDefault  mr-10 w-6 h-6  " />
    </div>
  );
}
