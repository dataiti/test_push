import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/layouts";

const AuthLayout = () => {
  return (
    <div className="">
      <div className="w-full h-[80px] fixed z-50">
        <Header />
      </div>
      <div className="px-[230px] pt-[90px] bg-[#e8edf2] min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
