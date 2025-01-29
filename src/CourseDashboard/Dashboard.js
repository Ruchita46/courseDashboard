import React, { useEffect } from "react";
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        dispatch(fetchCourseSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCourseFailure(error.message));
      });
  }, [dispatch]);


  return (
    <div className="container flex mt-4">
      <LeftSidebar />
      <div className="w-[70%] ml-[6rem]">
        <div className="bg-[#dec97db8] rounded-lg shadow-md mb-5 max-w-full mx-auto border-2 border-[#c9a420b8] p-4 text-[#ad8c18f7] font-semibold">
          Welcome to NYU Kreativespace, John
        </div>
        <div className="bg-[#ffffff] rounded-lg shadow-md mb-5 max-w-full mx-auto border-2 border-gray p-4 text-black font-semibold">
          <div className="flex justify-start items-center pb-2">
            <p>Dashboard</p>
            <div className="flex justify-end items-center gap-2 ml-auto">
              <FaBars />
              <img src={dots} alt="three-dots" className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-start items-center border-b-2 border-gray-200"></div>

          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-4 md:col-span-2">
            {course.map((item) => {
              return <Course item={item} />;
            })}
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
