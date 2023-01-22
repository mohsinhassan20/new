import React from "react";
import user from "../../constants/constants";
import UserDetails from "../reusableComponents/UserDetails";
import { useLocation } from "react-router-dom";
export default function UserListing() {
  const location = useLocation();

  const { userInfo } = user;
  return (
    <div className={`shadow-2xl   rounded-lg`}>
      {userInfo?.map((item) => (
        <UserDetails
          name={item?.name}
          date={item?.date}
          image={item?.image}
          message={item?.message}
          border={item?.border}
          count={item?.count}
          icon={item?.icon}
        />
      ))}
    </div>
  );
}
