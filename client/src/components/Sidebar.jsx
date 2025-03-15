import classNames from "classnames";
import React, { useEffect } from "react";
import {
  TbHome2,
  TbHome,
  TbReportAnalytics,
  TbCalendarMonth,
  TbAddressBook,
  TbUsers,
  TbUserPlus,
  TbCalendarClock,
  TbClipboardText,
} from "react-icons/tb";
import { Link, useLocation } from "react-router";

const sidebarContents = [
  {
    icon: <TbHome2 />,
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <TbCalendarClock />,
    name: "Appointments",
    path: "/admin/appointments",
  },
  {
    icon: <TbUserPlus />,
    name: "Add Admin",
    path: "/admin/add_admin",
  },

  {
    icon: <TbUsers />,
    name: "Admin List",
    path: "/admin/admin_list",
  },
  {
    icon: <TbClipboardText />,
    name: "Activity Log",
    path: "/admin/activity_log",
  },
  {
    icon: <TbHome2 />,
    name: "Dashboard Dummy",
    path: "/admin/dashboard_dummy",
  },
];

function Sidebar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
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
          )}
        >
          <p className="text-xl">{content.icon}</p>
          <p className="text-sm">{content.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
