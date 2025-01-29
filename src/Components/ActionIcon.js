import React from "react";
import PropTypes from 'prop-types';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import MenuDropDown from "./MenuDropDown";

const ActionIcon = ({ item }) => {
  return (
    <div className="flex justify-start items-center gap-4 pb-3 pl-2">
      <HiOutlineSpeakerphone className="h-5 w-5" />
      <LuNotebookPen className="h-5 w-5" />
      <IoFolderOpenOutline className="h-5 w-5" />

      <MenuDropDown item={item}/>
    </div>
  );
};


ActionIcon.propTypes = {
  item: PropTypes.object
};
export default ActionIcon;
