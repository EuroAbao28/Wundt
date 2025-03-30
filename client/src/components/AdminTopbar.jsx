import React, { useState } from "react";
import LiveClock from "./LiveClock";
import { Link, useNavigate } from "react-router";
import { TbLogout, TbUserSquareRounded } from "react-icons/tb";
import { useAdminContext } from "../contexts/AdminContext";
import classNames from "classnames";

function AdminTopbar() {
  const { adminData, setLogoutLoading } = useAdminContext();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutLoading(true);
    localStorage.removeItem("adminToken");

    setTimeout(() => {
      navigate("/admin/login");
    }, 1000);
  };

  return (
    <>
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
              onClick={() => setModalOpen(true)}
              className="flex gap-3 items-center px-6 py-3 hover:bg-gray-50 cursor-pointer">
              <TbLogout className="text-xl" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        </div>
      </header>

      <dialog
        className={classNames("modal p-6 ", {
          "modal-open": isModalOpen,
        })}>
        <div className="modal-box bg-white rounded w-sm p-6 flex flex-col gap-3">
          <header className="border-b border-gray-300 pb-3 font-semibold text-emerald-600 text-lg">
            Confirm Logout
          </header>
          <p className="text-sm">Are you sure you want to logout?</p>

          <div className="flex mt-12 justify-end gap-2">
            <button
              onClick={() => setModalOpen(false)}
              className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
              Close
            </button>

            <button
              onClick={handleLogout}
              className="bg-radial-[at_-50%_-50%] from-red-500 to-rose-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AdminTopbar;
