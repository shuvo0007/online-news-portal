import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../components/Navigation/LeftNav";
import Navbar from "../components/Navigation/Navbar";
import RightNav from "../components/Navigation/RightNav";

const Main = () => {
  return (
    <div class="flex flex-wrap overflow-hidden ">
      <div class="w-full overflow-hidden pb-2.5">
        {/* nav bar  */}
        <Navbar></Navbar>
      </div>

      <div class="w-full overflow-hidden pt-14">
        {/* default container */}
        <div class="flex flex-wrap overflow-hidden md:-mx-1">
          <div class="w-full overflow-hidden sm:w-full md:my-1 md:px-1 md:w-1/5">
            <LeftNav></LeftNav>
          </div>

          <div class="w-full overflow-hidden sm:w-full md:my-1 md:px-1 md:w-3/5">
            <Outlet></Outlet>
          </div>

          <div class="w-full overflow-hidden sm:w-full md:my-1 md:px-1 md:w-1/5">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
    </div>
    // <Outlet></Outlet>
  );
};

export default Main;
