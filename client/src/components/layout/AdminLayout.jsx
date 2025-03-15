import React from "react";
import pfp from "../../assets/pfp.png";
import logo from "../../assets/wundt_logo.jpg";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="h-screen flex bg-gray-50 font-poppins text-gray-600">
      <div className="min-w-64 bg-white shadow-card3">
        <div className="flex items-center gap-2 py-4 px-6">
          <img src={logo} alt="" className="w-12 rounded-full" />
          <h1 className="font-semibold text-sm text-emerald-600">
            Wundt Psychological <br></br> Institute
          </h1>
        </div>

        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white py-2 px-8 shadow-card3 flex justify-between items-center">
          <div>Dashboard</div>

          <div className="flex items-center gap-4">
            <div className="  flex flex-col items-end">
              <p className="text-xs font-semibold">Juan Dela Cruz</p>
              <span className="text-xxs">Admin</span>
            </div>
            <img
              src={pfp}
              alt=""
              className="w-10 aspect-square rounded-full object-cover object-center"
            />
          </div>
        </header>

        <div className="bg-white flex-1 m-8 shadow-card3 rounded p-6 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
