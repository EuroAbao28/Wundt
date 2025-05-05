import classNames from "classnames";
import React, { useEffect } from "react";
import {
  TbHome2,
  TbUsers,
  TbUserPlus,
  TbCalendarClock,
  TbClipboardText,
} from "react-icons/tb";
import { Link, useLocation } from "react-router";
import logo from "../assets/wundt_logo.png";

const sidebarContents = [
  {
    icon: <TbHome2 />,
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <TbCalendarClock />,
    name: "All Appointments",
    path: "/admin/all-appointments",
  },
  {
    icon: <TbUsers />,
    name: "Admin List",
    path: "/admin/admin-list",
  },
  {
    icon: <TbUserPlus />,
    name: "Add Admin",
    path: "/admin/add-admin",
  },
  {
    icon: <TbClipboardText />,
    name: "Activity Logs",
    path: "/admin/activity-logs",
  },
];

function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="min-w-64 bg-white shadow-card3">
      <div className="flex items-center gap-2 py-4 px-6">
        <img src={logo} alt="" className="w-12 rounded-full" />
        <h1 className="font-semibold text-sm text-jungle">
          Wundt Psych <br></br> Institute{" "}
          <span className="text-xs text-white bg-jungle rounded-lg px-2">
            Admin
          </span>
        </h1>
      </div>

      <div className="flex flex-col mt-4">
        {sidebarContents.map((content, index) => (
          <Link
            key={index}
            to={content.path}
            className={classNames(
              "flex items-center gap-4 px-6 py-3 active:scale-95 transition-transform hover:bg-gray-50",
              {
                "bg-gray-50 border-r-2 border-emerald-600":
                  location.pathname === content.path,
              }
            )}>
            <p className="text-xl">{content.icon}</p>
            <p className="text-sm">{content.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminSidebar;
