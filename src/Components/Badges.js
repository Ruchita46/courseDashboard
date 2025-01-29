import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import PropTypes from 'prop-types';

const Badges = ({ item }) => {
  const [favItem, setFavItem] = useState([]);
  const handleFavClick = (id) => {
    if (favItem.includes(id)) {
      setFavItem((prev) => prev.filter((item) => item !== id));
    } else {
      setFavItem([...favItem, id]);
    }
  };

  return (
    <>
      <div
        className="w-8 h-8 flex items-center justify-center rounded-full border border-black-400 absolute bookmark"
        onClick={() => handleFavClick(item.id)}
      >
        {favItem.includes(item.id) ? (
          <IoMdHeart className="h-6 w-6" />
        ) : (
          <IoMdHeartEmpty className="h-6 w-6" />
        )}
      </div>
      <div className="w-auto h-auto px-4 py-2 rounded-[22px] bg-white rounded-full border border-gray-400 text-black text-center absolute bottom-0 semester-block">
        {item.status === "Closed" ? item.status : item.semester}
      </div>
    </>
  );
};

Badges.propTypes = {
  item: PropTypes.object
};
export default Badges;
