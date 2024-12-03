import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const SharedLayout = () => {
  return (
    <>
      <MainNavigation />
      <div className=" flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
