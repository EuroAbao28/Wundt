import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import b1 from "../assets/wundt_logo.png";

function UserLayout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="font-poppins">
      <div className="text-gray-900 relative">
        <NavigationBar />
        <Outlet />

        {location.pathname !== "/appointment" && <Footer />}
      </div>
    </div>
  );
}

export default UserLayout;
