import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function UserLayout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="font-poppins text-gray-800 flex flex-col min-h-screen">
      <NavigationBar />
      <Outlet />

      {location.pathname !== "/appointment" && <Footer />}
    </div>
  );
}

export default UserLayout;
