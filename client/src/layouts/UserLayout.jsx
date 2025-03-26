import React from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div className="font-poppins text-gray-600 flex flex-col min-h-screen">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
