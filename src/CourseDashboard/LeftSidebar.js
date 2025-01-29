import React from "react";
import "../Styles/leftsidebar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsGrid1X2Fill } from "react-icons/bs";
import { PiNotepadLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineGroupAdd } from "react-icons/md";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineClock } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { PiFlowerTulipThin } from "react-icons/pi";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col pt-2 fixed right-0 left-0 left-block gap-3 items-center h-5 w-5 justify-between">
      <div className="flex flex-col items-center">
        <PiFlowerTulipThin className="h-5 w-5 mb-2" />
        <div className="flex flex-col gap-2 rounded-[3rem] border border-[#8080803b] radius-2 p-2 bg-[#8080803b]">
          <div className="rounded-[3rem] border  border-[#8080803b] p-2 radius-2 bg-[#ffffff] ">
            <BsGrid1X2Fill className="h-3 w-3"/>
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <PiNotepadLight className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <SlCalender className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <HiOutlineSpeakerphone className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <FaRegEdit className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <MdOutlineGroupAdd className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <LiaEnvelopeOpenTextSolid className="h-3 w-3" />
          </div>

          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <HiOutlineClock className="h-3 w-3" />
          </div>
          <div className="rounded-[3rem]  p-2 cursor-pointer radius-2 hover:bg-[#8080803b] ">
            <FaQuestionCircle className="h-3 w-3" />
          </div>
        </div>
        <div className="rounded-[3rem] border border-[#8080803b] p-2 radius-2 bg-[#8080803b] mt-2">
          <FaSearchPlus className="h-3 w-3" />
        </div>
      </div>

      <div className="rounded-[3rem] border  border-[#8080803b] p-2 radius-2 bg-[#8080803b] mb-2">
        <RiLogoutCircleRLine className="h-4 w-4" />
      </div>
    </div>
  );
};

export default LeftSidebar;
