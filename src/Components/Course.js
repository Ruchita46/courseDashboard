import React from "react";
import Badges from "./Badges";
import ActionIcon from "./ActionIcon";
import PropTypes from 'prop-types';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Course = ({ item }) => {
   const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id:item.id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  return (
    <div
    ref={setNodeRef}
      className="bg-white rounded-[12px] shadow-md course-card cursor-pointer transform transition duration-500 hover:scale-105"
      key={item.id}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="md:block flex-wrap">
        <div className="md:shrink-0 relative">
          <img
            className="h-48 w-full object-cover rounded-t-[12px]"
            src={item.thumbnail}
            alt="Modern building architecture"
          />
          <Badges item={item} />
          
        </div>

        <div className="pl-2 pt-8 pb-4 w-full md:w-auto">
          <p className="tracking-wide text-sm text-indigo-500 font-semibold">
            {item.title}
          </p>
          <p className="text-slate-400">{item.code}</p>
        </div>

        <ActionIcon item={item} />
      </div>
    </div>
  );
};

Course.propTypes = {
  item: PropTypes.object
};
export default Course;
