import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BsExclamationSquare } from "react-icons/bs";
export default function UserDetails({
  name,
  date,
  image,
  message,
  border,
  count,
  icon,
}) {
  return (
    <div
      className={`${
        border && " border-orangeDefault border-r-4 "
      }  cursor-pointer `}
    >
      <div className=" px-5 py-1 ">
        <div className="flex my-1 ">
          <div className="flex w-full gap-5  bg-orangeDefaul justify-start items-center ">
            <img src={image} className="w-5 h-5 rounded-full mt-2" />
            <span
              className={`text-${
                name === "Odette Walter"
                  ? "orangeDefault hover:text-black"
                  : "black"
              } text-lg whitespace-nowrap font-normal hover:text-orangeDefault  `}
            >
              {name}
            </span>
          </div>
          <div className="whitespace-nowrap text-iconGrayDefault text-xs">
            {date}
          </div>
        </div>
        <div className="flex w-full justify-between items-center ">
          <span className="whitespace-nowrap text-iconGrayDefault flex text-xs justify-between     w-full gap-14 ">
            <p className="ml-8 mt-3 truncate text-sm my-1">{message}</p>
            <div>
              {count ? (
                <span className="bg-orangeDefault flex justify-center items-center w-6 h-6 mt-2 rounded-lg">
                  <p className="text-[#fff]">{count}</p>
                </span>
              ) : icon && icon === "checkGreen" ? (
                <AiOutlineCheckSquare className="w-6 h-6 text-greenDefault" />
              ) : icon && icon === "exclamation" ? (
                <BsExclamationSquare className="w-5 h-5 text-blueDefault" />
              ) : icon && icon === "checkGray" ? (
                <AiOutlineCheckSquare className="w-6 h-6 text-iconGrayDefault" />
              ) : null}
            </div>
          </span>
        </div>
      </div>

      <hr className="text-iconGrayDefault w-full " />
    </div>
  );
}
