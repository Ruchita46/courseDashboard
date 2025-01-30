import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseFailure,
  fetchCourseSuccess,
} from "../store/FetchCourse/courseAction";
import "../Styles/course.css";
import axios from "axios";
import dots from "../assests/images/three-dots.png";
import { FaBars } from "react-icons/fa";
import LeftSidebar from "./LeftSidebar";
import Course from "../Components/Course";
import RightSidebar from "./RightSidebar";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IoSearch } from "react-icons/io5";
import Footer from "./Footer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const [courseData, setCourseData] = useState(course);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSearchChange = (e) => {
    let text = e.target.value.toLowerCase();
    if (text === "") {
      setCourseData(courseData);
    } else {
      const filetrData = courseData.filter((item) =>
        item.title.toLowerCase().includes(text)
      );
      setCourseData(filetrData);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        dispatch(fetchCourseSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCourseFailure(error.message));
      });
  }, [dispatch, search]);

  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(KeyboardSensor)
  // );

  //  Handle drag end event
  // const handleDragEnd = (event) => {
  //   const { active, over } = event;
  //   if (active.id !== over.id) {
  //     const oldIndex = courseData.findIndex((card) => card.id === active.id);
  //     const newIndex = courseData.findIndex((card) => card.id === over.id);
  //     setCourseData(arrayMove(courseData, oldIndex, newIndex)); // Rearrange order
  //   }
  // };

  const sortCourses = () => {
    const sortData = courseData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    return sortData;
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);

    sortCourses();
  };

  return (
    <div className="container flex mt-4">
      <LeftSidebar />
      <div className="w-[70%] ml-[6rem]">
        <div className="bg-[#dec97db8] rounded-lg shadow-md mb-5 max-w-full mx-auto border-2 border-[#c9a420b8] p-4 text-[#ad8c18f7] font-semibold">
          Welcome to NYU Kreativespace, John
        </div>
        <div className="bg-[#ffffff] rounded-lg shadow-md mb-5 max-w-full mx-auto border-2 border-gray p-4 text-black font-semibold">
          <div className="flex justify-start items-center pb-2">
            <p className="text-xl">Dashboard</p>
            <div className="flex justify-end items-center gap-2 ml-auto sm:flex sm:gap-2">
              <select
                onChange={handleSortChange}
                value={sortOrder}
                className="p-1 bg-white border rounded-md"
              >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
              <span
                className="p-2 rounded-full cursor-pointer hover:bg-gray-200 transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoSearch className="h-5 w-5 text-gray-600" />
              </span>
              {isOpen && (
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  className={`border border-gray-300 rounded-md px-3 py-1 outline-none transition-all duration-300 ${
                    isOpen ? "w-40 opacity-100" : "w-0 opacity-0"
                  }`}
                  onChange={handleSearchChange}
                />
              )}

              <FaBars />
              <img src={dots} alt="three-dots" className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-start items-center border-b-2 border-gray-200"></div>

          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-4 md:col-span-2">
            {/*<DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={courseData}
                strategy={horizontalListSortingStrategy}
              > */}
            {courseData.map((item) => {
              return <Course item={item} key={item.id} />;
            })}
            {/*</SortableContext>
            </DndContext>*/}
          </div>
        </div>
        <div className="pb-4">
          <Footer />
        </div>
      </div>
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
