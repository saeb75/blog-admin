import { Heading3, NavbarInput } from "@material-tailwind/react";
import React from "react";
import img1 from "../../assets/profile/1.jpg";
import img2 from "../../assets/profile/2.jpg";
import img3 from "../../assets/profile/3.jpg";
import img4 from "../../assets/profile/4.jpg";
import img5 from "../../assets/profile/5.jpg";
import { NavLink } from "react-router-dom";
import Avatar from "../../assets/avatar.jpg";
const MainNavbar = () => {
  return (
    <div className="p-4 border shadow bg-primary-light bg-opacity-100  rounded-md flex justify-between items-center backdrop-blur-md ">
      <div className="flex gap-2 items-center animate-pulse ">
        <div className="w-12 h-12  rounded-md p-0.5 bg-primary-main">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-12 h-12 rounded-md p-0.5 bg-primary-main">
          <img
            src={Avatar}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-12 h-12 rounded-md p-0.5 bg-primary-main">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-12 h-12 rounded-md p-0.5 bg-primary-main">
          <img
            src={img3}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-12 h-12 rounded-md p-0.5 bg-primary-main">
          <img
            src={img4}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-12 h-12 rounded-md p-0.5 bg-primary-main">
          <img
            src={img5}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <NavbarInput type="text" placeholder="Search here" />
    </div>
  );
};

export default MainNavbar;
