import React, { useState } from "react";
import dots from "../assests/images/three-dots.png";
import PropTypes from "prop-types";

const MenuDropDown = ({ item }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(0);

  const handleClickOpenmenu = (id,e) => {
    e.stopPropagation();
    setIsOpenMenu((prev) => (prev === id ? 0 : id));
  };
  return (
    <div
      className="flex justify-end items-center gap-2 ml-auto pr-4 relative three-dot"
      onClick={(e) => {
        handleClickOpenmenu(item.id,e);
      }}
    >
      <img src={dots} alt="three-dots" className="h-5 w-5 " />
      {isOpenMenu === item.id && (
        <div
          className="absolute  z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dropdown-menu"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Menu 1
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Menu 2
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Menu 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

MenuDropDown.propTypes = {
  item: PropTypes.object,
};
export default MenuDropDown;
