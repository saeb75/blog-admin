import React from "react";
import { ReactComponent as MyLayout } from "../../assets/layout-corner.svg";
import Aside from "./Aside";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="py-8  max-h-screen h-screen">
      <div className="absolute left-0 top-0 -z-10">
        <MyLayout />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-8 h-full">
        <div className="col-span-2 h-full pt-2">
          <Aside />
        </div>
        <div className="col-span-10">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
