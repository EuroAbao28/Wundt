import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { DUMMY_APPOINTMENTS } from "../../utils/DummyAppts";
import classNames from "classnames";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import useGetAllAppts from "../../hooks/useGetAllAppts";
import { useAppointmentContext } from "../../contexts/AppointmentContext";
import TIME_CONSTANTS from "../../constants/TIME_CONSTANTS.JS";
import useUpdateStatusAppt from "../../hooks/useUpdateStatusAppt";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import AppointmentDetailsModal from "../../components/AppointmentDetailsModal";
import AppointmentConfirmationModal from "../../components/AppointmentConfirmationModal";

const defaultFilters = {
  status: "",
  sort: "latest",
  time: "",
  date: "",
  createdAt: "",
  search: "",
  perPage: 20,
  page: 1,
};

function AllAppointments() {
  const location = useLocation();

  const {
    getAllApptsFunction,
    isLoading: isAllApptsLoading,
    error: allApptsError,
    data: allApptsData,
  } = useGetAllAppts();

  const {
    approveApptFunction,
    isApproveLoading,
    isDeclineLoading,
    isCancelLoading,
  } = useUpdateStatusAppt();

  const {
    isApptDetailsModalOpen,
    setIsApptDetailsModalOpen,
    selectedAppointment,
    setSelectedAppointment,
    isApptConfirmationModalOpen,
    setIsApptConfirmationModalOpen,
    handleCloseApproveModal,
  } = useAppointmentContext();

  const [filters, setFilters] = useState({
    status: "",
    sort: "latest",
    time: "",
    date: "",
    createdAt: "",
    search: "",
    perPage: 20,
    page: 1,
  });
  const [tempFilters, setTempFilters] = useState({
    status: "",
    sort: "latest",
    time: "",
    date: "",
    createdAt: "",
    search: "",
    perPage: 20,
    page: 1,
  });

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setTempFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();

    setFilters(tempFilters);
  };

  const handleResetFilters = () => {
    // check if filters are already in default state
    const isDefault = Object.keys(defaultFilters).every(
      (key) => tempFilters[key] === defaultFilters[key]
    );

    if (!isDefault) {
      setTempFilters(defaultFilters);
      setFilters(defaultFilters);
    }
  };

  const handleClearSearch = () => {
    setTempFilters((prev) => ({ ...prev, search: "" }));
    setFilters((prev) => ({ ...prev, search: "" }));
  };

  const handleChangePage = (direction) => {
    if (direction === "prev" && filters.page > 1) {
      setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
    } else if (direction === "next" && filters.page < allApptsData.totalPages) {
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handleShowModal = (data) => {
    setSelectedAppointment(data);
    setIsApptDetailsModalOpen(true);
  };

  const handleUpdateStatus = async (updatedStatus) => {
    const result = await approveApptFunction(
      selectedAppointment._id,
      updatedStatus
    );

    console.log(result);

    if (result.success) {
      toast.success(result.data.message);

      setIsApptDetailsModalOpen(false);
    } else {
      toast.error(result.error);
    }
  };

  useEffect(() => {
    getAllApptsFunction(filters);
  }, [filters]);

  return (
    <>
      <div className="h-full flex flex-col gap-6">
        <div className="flex justify-between gap-4 max-xl:flex-col">
          <h1 className="font-semibold mr-auto text-nowrap">
            All Appointments
          </h1>

          <div className="flex flex-wrap gap-4">
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
                <label className="flex items-center justify-between text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
                  <p className="font-semibold whitespace-nowrap">Per Page</p>
                  <select
                    name="perPage"
                    value={tempFilters.perPage}
                    onChange={handleChangeFilter}
                    className="w-full focus:outline-none">
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60">60</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                  </select>
                </label>

                <label className="flex items-center text-sm outline outline-gray-200 rounded py-2 px-3 gap-2">
                  <p className="font-semibold">Sort</p>
                  <select
                    name="sort"
                    value={tempFilters.sort}
                    onChange={handleChangeFilter}
                    className="w-full focus:outline-none px-1">
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                  </select>
                </label>

                <label className="flex items-center text-sm outline outline-gray-200 rounded py-2 px-3 gap-2">
                  <p className="font-semibold">Status</p>
                  <select
                    name="status"
                    value={tempFilters.status}
                    onChange={handleChangeFilter}
                    className="w-full focus:outline-none px-1">
                    <option value="">All</option>
                    <option value="completed">Completed</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="canceled">Canceled</option>
                    <option value="declined">Declined</option>
                  </select>
                </label>

                <label className="flex items-center  justify-between text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
                  <p className="font-semibold whitespace-nowrap">Appt Time</p>
                  <select
                    name="time"
                    value={tempFilters.time}
                    onChange={handleChangeFilter}
                    className=" focus:outline-none w-[45%] px-1">
                    <option value="">All</option>
                    {TIME_CONSTANTS.map((time, index) => (
                      <option key={index} value={time.value}>
                        {time.name}
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
                    name="date"
                    value={tempFilters.date}
                    onChange={handleChangeFilter}
                    className="appearance-none focus:outline-none"
                  />
                </label>

                <label className="flex items-center  justify-between col-span-2 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
                  <p className="font-semibold whitespace-nowrap">
                    Date Created
                  </p>
                  <input
                    type="date"
                    name="createdAt"
                    value={tempFilters.createdAt}
                    onChange={handleChangeFilter}
                    className="appearance-none focus:outline-none"
                  />
                </label>

                <button
                  onClick={handleResetFilters}
                  disabled={isAllApptsLoading}
                  className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white  rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
                  Reset
                </button>

                <button
                  onClick={handleApplyFilters}
                  disabled={isAllApptsLoading}
                  className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
                  Apply
                </button>
              </div>
            </div>

            {/* search */}
            <form
              onSubmit={handleApplyFilters}
              className="flex items-center outline outline-gray-200 rounded pl-3 pr-1 focus-within:outline-gray-300 transition-all max-xl:mr-auto">
              <FaSearch className="text-sm" />
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={tempFilters.search}
                onChange={handleChangeFilter}
                autoComplete="off"
                className="w-60 focus:outline-none ml-3 mr-1"
              />
              <button
                type="button"
                onClick={handleClearSearch}
                className={classNames(
                  "rounded-full p-1 hover:bg-gray-50 cursor-pointer transition-all duration-300",
                  {
                    "opacity-100": tempFilters.search,
                    "opacity-0 -z-10": !tempFilters.search,
                  }
                )}>
                <IoClose className="text-xl" />
              </button>
            </form>

            {/* pagination */}
            <div className="flex gap-4 items-center outline outline-gray-200 rounded">
              <button
                onClick={() => handleChangePage("prev")}
                disabled={isAllApptsLoading}
                className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-r border-gray-200">
                <MdOutlineKeyboardArrowLeft />
              </button>

              <p className="text-sm min-w-18">
                {allApptsData &&
                  `Page ${
                    allApptsData?.total > 0
                      ? allApptsData?.page
                      : allApptsData?.total
                  } of ${allApptsData?.totalPages}`}
              </p>

              <button
                onClick={() => handleChangePage("next")}
                disabled={isAllApptsLoading}
                className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-l border-gray-200">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="flex-1 relative">
          <div className="overflow-x-auto absolute inset-0 scrollbar-thin">
            <table className="table table-md table-pin-rows table-pin-cols">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <td>
                    <p className="text-gray-600 text-xs font-bold">
                      {allApptsData?.total}
                    </p>
                  </td>
                  <td>Name</td>
                  <td>Date</td>
                  <td>Time</td>
                  <td>Status</td>
                  <td>Phone No.</td>
                  <td>Email</td>
                  <td>Service Selected</td>
                </tr>
              </thead>
              <tbody>
                {isAllApptsLoading ? (
                  <>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 last:border-none hover:bg-gray-50  animate-pulse">
                        <td className="text-xs font-bold">
                          <div className="h-3 rounded-md bg-gray-100 w-[60%] py-3"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                        <td>
                          <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : allApptsError ? (
                  <tr>
                    <td colSpan={3}>
                      <p className="text-red-500 text-sm py-3">
                        {allApptsError.response?.data?.message ||
                          "Failed to load appointments"}
                      </p>
                    </td>
                  </tr>
                ) : allApptsData.appointments.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  allApptsData.appointments?.map((appt, index) => (
                    <tr
                      key={index}
                      onClick={() => handleShowModal(appt)}
                      className="border-b border-gray-200 last:border-none hover:bg-gray-50 cursor-pointer">
                      <td className="text-xs font-bold text-gray-600">
                        {(allApptsData.page - 1) * filters.perPage + index + 1}
                      </td>
                      <td>{`${appt?.firstname} ${appt?.lastname}`}</td>
                      <td>
                        <p className="whitespace-nowrap">
                          {format(parseISO(appt.dateTime), "MMM d, yyyy")}
                        </p>
                      </td>
                      <td>
                        <p className="whitespace-nowrap">
                          {format(parseISO(appt.dateTime), " h:mm a")}
                        </p>
                      </td>
                      <td>
                        <p
                          className={classNames(
                            "rounded-full w-fit px-2 py-1 text-xs capitalize font-medium",
                            {
                              "text-therapy-blue bg-therapy-blue/10":
                                appt?.status === "completed",
                              "text-jungle bg-jungle/10":
                                appt?.status === "approved",
                              "text-orange-500 bg-amber-500/10":
                                appt?.status === "pending",
                              "text-red-500 bg-red-500/10":
                                appt?.status === "canceled",
                              "text-gray-500 bg-gray-500/10":
                                appt?.status === "declined",
                            }
                          )}>
                          {appt?.status}
                        </p>
                      </td>
                      <td>{appt?.phone}</td>
                      <td>{appt?.email}</td>
                      <td className="max-w-80 truncate">
                        {appt?.selectedServices.join(", ")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AppointmentDetailsModal
        isOpen={isApptDetailsModalOpen}
        onClose={() => setIsApptDetailsModalOpen(false)}
        appointment={selectedAppointment}
        handleUpdateStatus={handleUpdateStatus}
        isApproveLoading={isApproveLoading}
        isDeclineLoading={isDeclineLoading}
        isCancelLoading={isCancelLoading}
      />

      <AppointmentConfirmationModal isOpen={isApptConfirmationModalOpen} />
    </>
  );
}

export default AllAppointments;
