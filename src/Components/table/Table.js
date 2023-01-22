import { React, useState } from "react";
import memeberDetails from "../../constants/constants";
import Members from "./../members/Members";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
const Table = () => {
  const { data } = memeberDetails;

  const [checked, setChecked] = useState(data);
  const [count, setcount] = useState(0);
  const [trash, setTrash] = useState(false);

  //function to handle checked and unchecked values
  const handleCheckboxChange = (person) => {
    const index = data.findIndex((item) => {
      return item.weight === person.weight;
    });

    setChecked(...data, (data[index].selected = !data[index].selected));

    const SelectedItems = data.filter((data) => data.selected === true);

    setcount(SelectedItems.length);
  };

  //fun to handle deleted items and repopulate records
  const deleteItems = (itemsList) => {
    const unDeletedItems = itemsList.filter(
      (itemsList) => itemsList.selected === false
    );
    console.log(unDeletedItems);
    setChecked(itemsList);
  };

  //jsx being returned
  return (
    <div
      className="   px-4 sm:px-6 lg:px-8b   
         w-full max-h-screen  "
    >
      <div className="sm:flex sm:items-center ">
        <div className=" flex my-[2.5%] w-full justify-between items-center mx-12 ">
          <span className="flex  gap-5 justify-start items-center">
            <span className="text-iconGrayDefault text-2xl cursor-pointer">
              Company :
            </span>
            <span className="flex justify-start items-center text-2xl text-orangeDefault cursor-pointer">
              All{" "}
              <MdArrowDropDown className="text-iconGrayDefault w-10 h-10 cursor-pointer" />
            </span>
          </span>
          <button className="justify-center items-center bg-orangeDefault p-3 rounded text-[#fff] font-medium hover:scale-105 hover:bg-grayDefault">
            Add Members
          </button>
        </div>
      </div>

      <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8 pb-24">
        <div className=" shadow-2xl ring-1 ring-black ring-opacity-5 md:rounded-lg ">
          <table className="min-w-full       divide-y divide-gray-300 ">
            {count > 0 ? (
              <div className="flex justify-start items-center gap-8 py-5 pl-4 pr-3 text-left   font-semibold text-gray-900 sm:pl-6">
                <p className="bg-orangeDefault rounded-sm text-xs p-1 px-2">
                  {count}
                </p>

                <p className="text-tableBlackDefault hover:text-iconGrayDefault  text-lg">
                  <span className="mx-2">{count}</span>Selected
                </p>
                <span>
                  <IoMdTrash
                    className="w-6 h-6 text-grayDefault hover:text-red cursor-pointer hover:scale-110"
                    onClick={() => {
                      deleteItems(data);
                    }}
                  />
                </span>
              </div>
            ) : (
              <thead className="">
                <tr className="text-grayDefault  ">
                  <th
                    scope="col"
                    className="flex gap-2 py-2 pl-4 pr-3 text-left  font-semibold text-gray-900 sm:pl-6"
                  >
                    <span className="ml-24 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer">
                      {" "}
                      Name
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="  px-3 py-2 text-left  font-semibold text-gray-900"
                  >
                    <span className="flex gap-2 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer">
                      Phone Number
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left  font-semibold text-gray-900"
                  >
                    <span className="flex gap-2 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer ">
                      Dog's Name
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3  text-left  font-semibold text-gray-900"
                  >
                    <span className="flex gap-2 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer">
                      Age
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left  font-semibold text-gray-900"
                  >
                    <span className="flex gap-2 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer ">
                      Weight (kg)
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left  font-semibold text-gray-900"
                  >
                    <span className="flex gap-2 text-iconGrayDefault text-xl hover:scale-105 cursor-pointer">
                      Status
                    </span>
                  </th>
                </tr>
              </thead>
            )}

            <tbody className="divide-y   text-iconGrayDefault">
              {data.map((person, index) => (
                <tr
                  className="text-grayDefault      hover:bg-pinkDefalut"
                  key={index}
                >
                  <td className="whitespace-nowrap   pl-4 pr-3  sm:pl-6">
                    <div className="flex items-center   ">
                      <input
                        type="checkbox"
                        defaultChecked={person.selected}
                        onChange={() => {
                          handleCheckboxChange(person);
                        }}
                        className="w-5 h-5  mx-5 ml-0  text-blueDefault cursor-pointer accent-orangeDefault  focus:text-[#ffffff]   "
                      />
                      <div className=" flex-shrink-0">
                        <img
                          className="h-7 w-7 rounded-full"
                          src={person.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-tableBlackDefault text-xl hover:scale-105 cursor-pointer ">
                          {person.userName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 pt-4 pb-1  text-gray-500">
                    <div className="text-tableGray font-medium text-xs py-[11px]  cursor-pointer">
                      {person.phoneNumber}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 pt-4 pb-1  text-gray-500">
                    <span className="inline-flex rounded-full   font-semibold leading-5 text-tableGray text-xs hover:text-white cursor-pointer">
                      {person.name}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 pt-4 pb-1 text-tableGray font-medium text-xs  cursor-pointer">
                    {person.age}
                  </td>
                  <td className="relative whitespace-nowrap pt-4 pb-1  text-center      font-medium  text-tableGray text-xs  cursor-pointer ">
                    {person.weight}
                  </td>
                  <td className="relative whitespace-nowrap pt-4 pb-1 pl-3 pr-4    font-medium sm:pr-6 text-tableGray text-xs  cursor-pointer">
                    {person.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
