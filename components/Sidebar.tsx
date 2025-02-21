import React from "react";
import Logo from "./Logo";
import { AiFillPicture } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import SidebarListItem from "./SidebarListItem";

function Sidebar() {
  return (
    <div className="w-1/5 h-full p-5">
      <div className="h-full w-full pt-11 bg-black rounded-md ">
        <div className="">
        <Logo />
        </div>
        <div className=" w-full pt-16 px-2 space-y-4">
          <SidebarListItem isSelected={true} label="Booking">
            <AiFillPicture />
          </SidebarListItem>
          <SidebarListItem isSelected={false} label="Activity">
            <FiDownload />
          </SidebarListItem>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
