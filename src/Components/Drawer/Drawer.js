import { React, useEffect, useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { BsChatLeft } from "react-icons/bs";

import { CiViewColumn } from "react-icons/ci";
import { MdOutlineViewAgenda } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

export default function Drawer() {
  const [isToggled, setIsToggled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  var path = location.pathname.slice("/");
  useEffect(() => {
    if (path === "/") {
      navigate("/");
    }
  }, []);
  const toggleState = (isToggled) => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="">
      {isToggled === true ? (
        //untoglled design
        <div className="w-full      px-4 shadow-2xl grid grid-rows-2   ">
          <div className=" my-2 ">
            <div className="flex      justify-start items-center  gap-2 p-3 my-5 ">
              <img
                src="https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM="
                className="rounded-full w-16 h-16 cursor-pointer"
              />
              <div className="grid  ">
                <div className="text-black  text-xl whitespace-nowrap">
                  Sierra Ferguson
                </div>
                <div className="text-iconGrayDefault  pr-10">
                  s.ferguson@gmail.com
                </div>
              </div>
            </div>
            <div className=" ">
              <div
                className={`flex      justify-start items-center gap-2  ml-5  cursor-pointer hover:scale-105`}
              >
                <TbLayoutDashboard
                  className={`w-6 h-6 text-${
                    path === "/dashboard" ? "orangeDefault" : "grayDefault"
                  }`}
                />
                <p
                  className={`text-xl   text-${
                    path === "/dashboard"
                      ? "orangeDefault"
                      : "tableBlackDefault "
                  } `}
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </p>
              </div>
              <div className="flex  justify-start items-center gap-2  my-6  ml-5 cursor-pointer hover:scale-105">
                <MdOutlineViewAgenda
                  className={`w-6 h-6  text-${
                    path === "/tasks" ? "orangeDefault" : "grayDefault"
                  }`}
                />
                <p
                  className={` text-xl  text-${
                    path === "/tasks" ? "orangeDefault" : "tableBlackDefault"
                  }  `}
                  onClick={() => navigate("/tasks")}
                >
                  Tasks
                </p>
              </div>
              <div className="flex  justify-start items-center gap-2  my-6  ml-5 cursor-pointer hover:scale-105 ">
                <MdOutlineEmail
                  className={`w-6 h-6 text-${
                    path === "/emails" ? "orangeDefault" : "grayDefault"
                  } `}
                />
                <p
                  className={`text-xl w-6 h-6  text-${
                    path === "/emails" ? "orangeDefault" : "tableBlackDefault"
                  }`}
                  onClick={() => navigate("/emails")}
                >
                  Emails
                </p>
              </div>
              <div className="flex  justify-start items-center gap-2  my-6  ml-5 cursor-pointer hover:scale-105">
                <CiUser
                  className={`w-6 h-6  font-extrabold  text-${
                    path === "/members" ? "orangeDefault" : "grayDefault"
                  } `}
                />
                <p
                  className={`text-xl text-${
                    path === "/members" ? "orangeDefault" : "tableBlackDefault"
                  }`}
                  onClick={() => navigate("/members")}
                >
                  Members
                </p>
              </div>
              <div className="flex  justify-start items-center gap-2  my-6  ml-5 cursor-pointer hover:scale-105">
                <BsChatLeft
                  className={`w-6 h-6 text-${
                    path === "/chats" ? "orangeDefault" : "grayDefault"
                  }`}
                />
                <p
                  className={`w-6 h-6 text-xl text-${
                    path === "/chats" ? "orangeDefault" : "tableBlackDefault"
                  }`}
                  onClick={() => navigate("/chats")}
                >
                  Chat
                </p>
              </div>
              <div className="flex  justify-start items-center gap-2  my-6  ml-5 cursor-pointer hover:scale-105">
                <CiViewColumn
                  className={`w-6 h-6 text-${
                    path === "/deals" ? "orangeDefault" : "grayDefault"
                  }  `}
                />
                <p
                  className={`text-xl text-${
                    path === "/deals" ? "orangeDefault" : "tableBlackDefault"
                  }`}
                  onClick={() => navigate("/deals")}
                >
                  Deals
                </p>
              </div>
            </div>
          </div>
          <div className=" my-4   ">
            <hr className="  text-grayDefault text-lg font-bold" />
            <div className="flex pb-14 h-full flex-col  justify-between  ">
              <div className="flex  justify-start items-center gap-2 mt-2   cursor-pointer hover:scale-105">
                <BiDotsHorizontalRounded
                  className={`w-6 h-6 text-${
                    path === "/settings" ? "orangeDefault" : "grayDefault"
                  }`}
                />
                <p
                  className={`text-xl text-${
                    path === "/settings"
                      ? "orangeDefault"
                      : "tableBslackDefault"
                  }`}
                  onClick={() => {
                    navigate("/settings");
                  }}
                >
                  Settings
                </p>
              </div>
              <div
                className=" flex gap-2   ml-5 cursor-pointer hover:scale-105 "
                onClick={() => toggleState(isToggled)}
              >
                <BsLayoutSidebarInset className="w-6 h-6  text-grayDefault" />
                <p className="text-xl ">Toggle Sidebar</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        //toglled design

        <div className="min-w-[20%]    shadow-2xl grid grid-rows-2 ">
          <div className="px-1   flex gap-2  flex-col ">
            <div className="flex justify-start items-center  my-5  px-1 max-h-[50%] mb-2">
              <img
                src="https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM="
                className="rounded-full w-16 h-16 cursor-pointer"
              />
            </div>

            <div className=" max-h-full  ">
              <div className="flex   justify-start items-center gap-2  text-orangeDefault ml-5 hover:scale-105">
                <TbLayoutDashboard
                  className={`w-6 h-6  text-${
                    path === "/dashboard" ? "orangeDefault" : "grayDefault"
                  } cursor-pointer`}
                  onClick={() => navigate("/dashboard")}
                />
              </div>

              <div className="flex  justify-start items-center gap-2  my-10  ml-5 hover:scale-105">
                <MdOutlineViewAgenda
                  className={`w-6 h-6 text-${
                    path === "/tasks" ? "orangeDefault" : "grayDefault"
                  } cursor-pointer `}
                  onClick={() => navigate("/tasks")}
                />
              </div>

              <div className="flex  justify-start items-center gap-2  my-10  ml-5 hover:scale-105">
                <MdOutlineEmail
                  className={`w-6 h-6 text-${
                    path === "/emails" ? "orangeDefault" : "grayDefault"
                  } cursor-pointer `}
                  onClick={() => navigate("/emails")}
                />
              </div>

              <div className="flex  justify-start items-center gap-2  my-10  ml-5 hover:scale-105">
                <CiUser
                  className={`w-6 h-6 text-${
                    path === "/members" ? "orangeDefault" : "grayDefault"
                  } cursor-pointer `}
                  onClick={() => navigate("/members")}
                />
              </div>
              <div className="flex  justify-start items-center gap-2  my-10  ml-5 hover:scale-105">
                <BsChatLeft
                  className={`w-6 h-6 text-${
                    path === "/chats" ? "orangeDefault" : "grayDefault"
                  } cursor-pointer `}
                  onClick={() => navigate("/chats")}
                />
              </div>
              <div
                className="flex  justify-start items-center gap-2  mt-5 ml-5  hover:scale-105    cursor-pointer "
                onClick={() => navigate("/deals")}
              >
                <CiViewColumn
                  className={`w-6 h-6 text-${
                    path === "/deals" ? "orangeDefault" : "grayDefault"
                  }  `}
                />
              </div>
            </div>
          </div>

          <div className="px-1 ">
            <hr className=" w-full  text-grayDefault text-lg font-bold mt-5" />
            <div className="flex   h-[84%] flex-col  justify-between  ">
              <div className="flex  justify-start items-center gap-2   hover:scale-105  ml-2">
                <BiDotsHorizontalRounded
                  className={`w-6 h-6 ml-3  cursor-pointer text-${
                    path === "/settings" ? "orangeDefault" : "grayDefault"
                  } `}
                  onClick={() => navigate("/settings")}
                />
              </div>

              <div className=" flex gap-2    ml-5 hover:scale-105 ">
                <BsLayoutSidebarInset
                  className={`w-6 h-6  ml-1 text-${
                    isToggled === false ? "orangeDefault" : "black"
                  } cursor-pointer `}
                  onClick={() => toggleState(isToggled)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
