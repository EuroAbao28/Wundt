import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DUMMY_APPOINTMENTS } from "../../utils/DummyAppts";
import classNames from "classnames";
import { FaFilter, FaSearch } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import user from "../../assets/user_placeholder.png";
import axios from "axios";
import { DUMMY_ADMINS } from "../../utils/DummyAdmins";

function AdminList() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=25&inc=picture"
        );
        console.log(response.data);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between gap-4">
        <h1 className="font-semibold textarea-lg mr-auto"> Admins List</h1>

        {/* filter */}
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-4 ring-1 ring-gray-200 hover:bg-gray-50 rounded px-3 py-1 cursor-pointer active:scale-95 transition-all">
            <FaFilter className="text-sm" />
            <p>Filter</p>
          </div>

          <div
            tabIndex={0}
            className="dropdown-content grid grid-cols-2 gap-4 p-6 mt-3 bg-white shadow-sm rounded w-sm ring-1 ring-gray-300">
            <label className="flex items-center text-sm outline outline-gray-200 rounded py-2 px-3 gap-2">
              <p className="font-semibold">Status</p>
              <select className="w-full focus:outline-none px-1">
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Confirmed</option>
                <option value="">Pending</option>
                <option value="">Canceled</option>
              </select>
            </label>

            <label className="flex items-center text-sm outline outline-gray-200 rounded py-2 px-3 gap-2">
              <p className="font-semibold">Sort</p>
              <select className="w-full focus:outline-none px-1">
                <option value="">Latest</option>
                <option value="">Oldest</option>
                <option value="">A to Z</option>
                <option value="">Z to A</option>
              </select>
            </label>

            <label className="flex items-center  justify-between col-span-2 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
              <p className="font-semibold whitespace-nowrap">
                Appointment Time
              </p>
              <select className=" focus:outline-none w-[45%] px-1">
                {[
                  "All",
                  "9:00 AM",
                  "10:00 AM",
                  "11:00 AM",
                  "12:00 PM",
                  "1:00 PM",
                  "2:00 PM",
                  "3:00 PM",
                  "4:00 PM",
                ].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center  justify-between col-span-2 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
              <p className="font-semibold whitespace-nowrap">
                Appointment Date
              </p>
              <input
                type="date"
                className="appearance-none focus:outline-none"
              />
            </label>

            <label className="flex items-center  justify-between col-span-2 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
              <p className="font-semibold whitespace-nowrap">Date Created</p>
              <input
                type="date"
                className="appearance-none focus:outline-none"
              />
            </label>

            <button className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white  rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
              Reset
            </button>

            <button className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white  rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
              Apply
            </button>
          </div>
        </div>

        {/* search */}
        <form className="flex items-center gap-4 outline outline-gray-200 rounded px-3 py-1 focus-within:outline-gray-300 transition-all">
          <FaSearch className="text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="w-60 focus:outline-none"
          />
        </form>

        {/* pagination */}
        <div className="flex gap-4 items-center outline outline-gray-200 rounded">
          <button className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-r border-gray-200">
            <MdOutlineKeyboardArrowLeft />
          </button>

          <p className="text-sm">Page 1 of 5</p>

          <button className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-l border-gray-200">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      {/* table */}
      <div className="flex-1 relative">
        <div className="overflow-x-auto absolute inset-0 scrollbar-thin">
          <table className="table table-md table-pin-rows table-pin-cols">
            <thead>
              <tr className="bg-white border-b border-gray-200">
                <th></th>
                <th></th>
                <td>Name</td>
                <td>Role</td>
                <td>Status</td>
                <td>Branch</td>
                <td>Email.</td>
                <td>Phone No.</td>
              </tr>
            </thead>
            <tbody>
              {DUMMY_ADMINS.map((admin, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-none hover:bg-gray-50">
                  <td className="text-xs font-bold">{index + 1}</td>
                  <td className="text-xs font-bold">
                    <img
                      src={data[index]?.picture.medium || user}
                      alt=""
                      className="w-10 aspect-square mask mask-squircle"
                    />
                  </td>
                  <td>{`${admin.firstname} ${admin.lastname}`}</td>
                  <td>
                    <p className="capitalize">
                      {admin.role.replace(/_/g, " ")}
                    </p>
                  </td>
                  <td>
                    <p
                      className={classNames(
                        "rounded-full w-fit px-2 py-1 text-xs capitalize",
                        {
                          "text-emerald-600 bg-emerald-500/10":
                            admin.status === "active",
                          "text-red-600 bg-red-500/10":
                            admin.status === "inactive",
                        }
                      )}>
                      {admin.status}
                    </p>
                  </td>
                  <td>{admin.branch}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminList;
