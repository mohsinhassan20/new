import React from "react";
import UserListing from "./UserListing";
import ChatScreen from "./ChatScreen";

export default function Chats() {
  return (
    <div className="flex w-full p-5 gap-5   my-[6vh] ">
      <div className="w-1/3">
        <UserListing className="w-ful" />
      </div>
      <div>
        <ChatScreen />
      </div>
    </div>
  );
}
