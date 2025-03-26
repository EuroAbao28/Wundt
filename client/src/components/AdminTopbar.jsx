import React from "react";
import LiveClock from "./LiveClock";
import { Link } from "react-router";
import { TbLogout, TbUserSquareRounded } from "react-icons/tb";
import pfp from "../assets/pfp.png";
import { useAdminContext } from "../contexts/AdminContext";

function AdminTopbar() {
  const { adminData, handleLogout } = useAdminContext();

  return (
    <header className="bg-white py-2 px-8 shadow-card3 flex items-center">
      <LiveClock />

      <div className="ml-auto dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center gap-4 cursor-pointer">
          <div className="  flex flex-col items-end">
            <p className="text-xs font-semibold">{`${adminData?.admin?.firstname} ${adminData?.admin?.lastname}`}</p>
            <span className="text-xxs capitalize">
              {adminData?.admin?.role}
            </span>
          </div>
          <img
            src={adminData?.admin?.profilePic}
            alt=""
            className="w-10 aspect-square rounded-full object-cover object-center"
          />
        </div>

        <div
          tabIndex={0}
          className="dropdown-content right-0 mt-2 bg-white shadow-sm rounded flex flex-col w-60 outline outline-gray-300">
          <Link className="flex gap-3 items-center px-6 py-3 hover:bg-gray-50">
            <TbUserSquareRounded className="text-xl" />
            <p className="text-sm">My Profile</p>
          </Link>

          <button
            onClick={handleLogout}
            className="flex gap-3 items-center px-6 py-3 hover:bg-gray-50 cursor-pointer">
            <TbLogout className="text-xl" />
            <p className="text-sm">Logout</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;
