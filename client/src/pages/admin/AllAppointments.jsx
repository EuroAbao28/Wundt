import React, { useState } from "react";
import { format } from "date-fns";
import { DUMMY_APPOINTMENTS } from "../../utils/DummyAppts";
import classNames from "classnames";
import { FaFilter, FaSearch } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function AllAppointments() {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between gap-4">
        <h1 className="font-semibold textarea-lg mr-auto">All Appointments</h1>

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
                <td>Name</td>
                <td>Date</td>
                <td>Time</td>
                <td>Service Selected</td>
                <td>Phone No.</td>
                <td>Email</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {DUMMY_APPOINTMENTS.map((appt, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-none hover:bg-gray-50">
                  <td className="text-xs font-bold">{index + 1}</td>
                  <td>{`${appt.firstname} ${appt.lastname}`}</td>
                  <td>{`${format(new Date(appt.date), "EEEE, MMMM d")}`}</td>
                  <td>{appt.time}</td>
                  <td>{appt.selectedServices}</td>

                  <td>{appt.phone}</td>
                  <td>{appt.email}</td>
                  <td>
                    <p
                      className={classNames(
                        "rounded-full w-fit px-2 py-1 text-xs capitalize",
                        {
                          "text-blue-500 bg-blue-500/10":
                            appt.status === "completed",
                          "text-emerald-600 bg-emerald-500/10":
                            appt.status === "confirmed",
                          "text-amber-600 bg-amber-500/10":
                            appt.status === "pending",
                          "text-red-600 bg-red-500/10":
                            appt.status === "canceled",
                        }
                      )}>
                      {appt.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
