import React from "react";
import PropTypes from "prop-types";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import MenuDropDown from "./MenuDropDown";

const ActionIcon = ({ item }) => {
  return (
    <div className="flex justify-start items-center gap-4 pb-3 pl-2">
      <div className="hover:p-2 rounded-[2rem] transition duration-300 hover:bg-gray-200 hover:text-gray-700 cursor-pointer flex items-center justify-center">
        <HiOutlineSpeakerphone className="h-5 w-5" />
      </div>
      <div className="hover:p-2 rounded-[2rem] transition duration-300 hover:bg-gray-200 hover:text-gray-700 cursor-pointer flex items-center justify-center">
        <LuNotebookPen className="h-5 w-5" />
      </div>
      <div className="hover:p-2 rounded-[2rem] transition duration-300 hover:bg-gray-200 hover:text-gray-700 cursor-pointer flex items-center justify-center">
        <IoFolderOpenOutline className="h-5 w-5" />
      </div>
      <MenuDropDown item={item} />
    </div>
  );
};

ActionIcon.propTypes = {
  item: PropTypes.object,
};
export default ActionIcon;
