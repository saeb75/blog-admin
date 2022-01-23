import { Card } from "@material-tailwind/react";
import React from "react";
import { FaUsers, FaCommentDots } from "react-icons/fa";
import Lottie from "lottie-react";
import { MdCategory, MdOutlineLogout } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import LotHello from "../../assets/lottie/hello.json";
import { NavLink } from "react-router-dom";
import Ripples from "react-ripples";
import Avatar from "../../assets/avatar.jpg";
const Aside = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="font-extrabold text-[24px]">Learn.io</h3>
        <span className="text-sm text-gray-500 mt-6">Improved Learning</span>
        <div className="h-full">
          <div className="w-16 h-16  flex items-center gap-4 mt-10">
            <img src={Avatar} alt="" className="object-fill rounded-full " />
            <h2 className="w-full whitespace-nowrap text-xl font-bold">
              Hi Saeb
            </h2>
          </div>
          <Card className="mt-16 flex w-5/6 ">
            <ul className="w-full">
              <li className="w-full rounded-md overflow-hidden text-gray-600 bg-primary-main">
                <Ripples className="w-full">
                  <NavLink
                    to={"/"}
                    className="flex items-center gap-4 p-3 w-full"
                  >
                    <FaUsers className="text-2xl" />
                    <span className="font-bold">Users</span>
                  </NavLink>
                </Ripples>
              </li>
              <li className="w-full rounded-md overflow-hidden text-gray-600">
                <Ripples className="w-full">
                  <NavLink
                    to={"/"}
                    className="flex items-center gap-4 p-3 w-full"
                  >
                    <MdCategory className="text-2xl" />
                    <span className="font-bold">Categories</span>
                  </NavLink>
                </Ripples>
              </li>
              <li className="w-full rounded-md overflow-hidden text-gray-600">
                <Ripples className="w-full">
                  <NavLink
                    to={"/"}
                    className="flex items-center gap-4 p-3 w-full"
                  >
                    <RiArticleFill className="text-2xl" />
                    <span className="font-bold">Blogs</span>
                  </NavLink>
                </Ripples>
              </li>
              <li className="w-full rounded-md overflow-hidden text-gray-600">
                <Ripples className="w-full">
                  <NavLink
                    to={"/"}
                    className="flex items-center gap-4 p-3 w-full"
                  >
                    <FaCommentDots className="text-2xl" />
                    <span className="font-bold">Comments</span>
                  </NavLink>
                </Ripples>
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <div className="rotateX180">
        <Lottie animationData={LotHello} loop={true} />
      </div>

      <Card>
        <ul className="w-full">
          <li className="w-full rounded-md overflow-hidden bg-secondary-dark text-white">
            <Ripples className="w-full">
              <NavLink to={"/"} className="flex items-center gap-4 p-3 w-full">
                <span className="rotate-180">
                  <MdOutlineLogout className="text-2xl" />
                </span>
                <span className="font-bold">Log out</span>
              </NavLink>
            </Ripples>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Aside;
