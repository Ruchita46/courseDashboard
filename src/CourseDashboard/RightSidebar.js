import React from "react";
import { CiBellOn } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { GoTypography } from "react-icons/go";
import { TfiGoogle } from "react-icons/tfi";
import { LuRefreshCcwDot } from "react-icons/lu";
import { MdImageSearch } from "react-icons/md";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 w-[20%] h-auto bg-[#faebd7] p-[0.5rem] border rounded-[20px] ml-[6rem]">
      <div className="flex gap-3 justify-between">
        <div className="flex gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border bg-white">
            <CiBellOn />
          </div>
          <div className="w-[4rem] h-8 flex items-center justify-center rounded-full bg-white">
            <TbWorld className="h-5 w-5 pr-2" />
            <p className="text-xs pr-2">En</p>{" "}
            <FaAngleDown className="h-3 w-3" />
          </div>
        </div>
        <div className="w-[3rem] h-8 flex items-center justify-center rounded-full bg-white">
          <CgProfile className="h-5 w-5" /> <FaAngleDown className="h-3 w-3" />
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex relative">
          <input
            type="text"
            placeholder="Calendar"
            className="block w-full px-4 py-2 text-sm bg-white border rounded-md shadow-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaAngleDown className="absolute top-1/3 right-2  text-gray-600" />
        </div>
        <div className="flex relative">
          <input
            type="text"
            placeholder="To Do"
            className="block w-full px-4 py-2 text-sm bg-white border rounded-md shadow-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaAngleDown className="absolute top-1/3 right-2  text-gray-600" />
        </div>
        <div className="flex relative">
          <input
            type="text"
            placeholder="Annoucement"
            className="block w-full px-4 py-2 text-sm bg-white border rounded-md shadow-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaAngleDown className="absolute top-1/3 right-2  text-gray-600" />
        </div>

        <div className="flex justify-start items-center gap-4 pb-3 pl-2">
          <div className="rounded-[10px] border border-[#8080803b] p-2 radius-2 bg-[#ffa500] mt-2">
            <MdImageSearch />
          </div>
          <div className="rounded-[10px] border border-[#8080803b] p-2 radius-2 bg-[#00d8ff] mt-2">
            <GoTypography />
          </div>
          <div className="rounded-[10px] border border-[#8080803b] p-2 radius-2 bg-[#5aff00] mt-2">
            <TfiGoogle />
          </div>
          <div className="rounded-[10px] border border-[#8080803b] p-2 radius-2 bg-[#e5e7eb] mt-2">
            <LuRefreshCcwDot />
          </div>
          <div className="rounded-[10px] border border-[#8080803b] p-2 radius-2 bg-[#a900ff] mt-2">
            <GoTypography />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
