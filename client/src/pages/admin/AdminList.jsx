import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DUMMY_APPOINTMENTS } from "../../utils/DummyAppts";
import classNames from "classnames";
import { FaFilter, FaSearch, FaPlus } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import user from "../../assets/user_placeholder.png";
import axios from "axios";
import { DUMMY_ADMINS } from "../../utils/DummyAdmins";
import useGetAllAdmins from "../../hooks/useGetAllAdmins";
import AdminDetailsModal from "../../components/AdminDetailsModal";
import CreateAdminModal from "../../components/CreateAdminModal";
import personPlaceholder from "../../assets/person_placeholder.jpg";
import { IoClose } from "react-icons/io5";

const defaultFilters = {
  status: "",
  sort: "latest",
  role: "",
  branchLocated: "",
  createdAt: "",
  search: "",
  perPage: 20,
  page: 1,
};

function AdminList() {
  const { getAllAdminsFunction, isLoading, error, data } = useGetAllAdmins();

  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [isAdminDetailsModalOpen, setIsAdminDetailsModalOpen] = useState(false);
  const [isCreateNewModalOpen, setIsCreateNewModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    status: "",
    sort: "latest",
    role: "",
    branchLocated: "",
    createdAt: "",
    search: "",
    perPage: 20,
    page: 1,
  });
  const [tempFilters, setTempFilters] = useState({
    status: "",
    sort: "latest",
    role: "",
    branchLocated: "",
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
    } else if (direction === "next" && filters.page < data.totalPages) {
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handleShowAdminDetailsModal = (data) => {
    console.log(data);
    setSelectedAdmin(data);
    setIsAdminDetailsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAdminDetailsModalOpen(false);
  };

  useEffect(() => {
    getAllAdminsFunction(filters);
  }, [filters]);

  return (
    <>
      <div className="h-full flex flex-col gap-6">
        <div className="flex justify-between gap-4 max-xl:flex-col">
          <h1 className="font-semibold mr-auto text-nowrap"> Admins List</h1>

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
                    className="w-full focus:outline-none">
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
                    className="w-full focus:outline-none">
                    <option value="">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </label>

                <label className="flex items-center  justify-between col-span-1 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
                  <p className="font-semibold whitespace-nowrap">Role</p>
                  <select
                    name="role"
                    value={tempFilters.role}
                    onChange={handleChangeFilter}
                    className=" focus:outline-none w-full">
                    <option value="">All</option>
                    <option value="author">Author</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>

                <label className="flex items-center  justify-between col-span-2 text-sm outline outline-gray-200 rounded py-2 px-3 gap-3">
                  <p className="font-semibold whitespace-nowrap">
                    Branch Located
                  </p>
                  <select
                    name="branchLocated"
                    value={tempFilters.branchLocated}
                    onChange={handleChangeFilter}
                    className="w-full focus:outline-none">
                    <option value="">All</option>
                    <option value="Dagupan City">Dagupan</option>
                    <option value="Vigan City">Vigan</option>
                    <option value="Urdaneta City">Urdaneta</option>
                    <option value="Mangaldan">Mangaldan</option>
                  </select>
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
                  disabled={isLoading}
                  className="bg-gray-200 text-gray-600  rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
                  Reset
                </button>

                <button
                  onClick={handleApplyFilters}
                  disabled={isLoading}
                  className="bg-jungle text-white  rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm cursor-pointer">
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
                disabled={isLoading}
                className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-r border-gray-200">
                <MdOutlineKeyboardArrowLeft />
              </button>

              <p className="text-sm min-w-18">
                {data &&
                  `Page ${data?.total > 0 ? data?.page : data?.total} of ${
                    data?.totalPages
                  }`}
              </p>

              <button
                onClick={() => handleChangePage("next")}
                disabled={isLoading}
                className="p-1 text-2xl hover:bg-gray-50 cursor-pointer border-l border-gray-200">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>

            {/* create new button */}
            <div
              onClick={() => setIsCreateNewModalOpen(true)}
              className="flex items-center gap-4 bg-jungle text-white rounded px-3 py-1 cursor-pointer active:scale-95 transition-all">
              <FaPlus className="text-sm" />
              <p>Create</p>
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
                      {data?.total}
                    </p>
                  </td>
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
                {isLoading ? (
                  <>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 last:border-none hover:bg-gray-50 animate-pulse">
                        <td className="w-6">
                          <div className="h-4 rounded-md bg-gray-100 w-full my-2"></div>
                        </td>
                        <td className="w-12">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                        <td className="w-32">
                          <div className="h-4 rounded-md bg-gray-100 w-full"></div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : error ? (
                  <tr>
                    <td colSpan={8} className="text-red-500 text-sm">
                      {error.response.data.message}
                    </td>
                  </tr>
                ) : data?.admins.length === 0 ? (
                  <tr>
                    <td className="text-gray-500 text-sm">No Admins found.</td>
                  </tr>
                ) : (
                  data?.admins.map((admin, index) => (
                    <tr
                      key={index}
                      onClick={() => handleShowAdminDetailsModal(admin)}
                      className="border-b border-gray-200 last:border-none hover:bg-gray-50">
                      <td className="text-xs font-bold text-gray-600">
                        {(data.page - 1) * filters.perPage + index + 1}
                      </td>
                      <td>
                        <div className="w-9">
                          <img
                            src={admin.profilePic || personPlaceholder}
                            alt={admin.firstname}
                            className=" w-full
                      aspect-square mask mask-squircle object-center object-cover"
                          />
                        </div>
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
                            "rounded-full w-fit px-2 py-1 text-xs capitalize font-medium",
                            {
                              "text-jungle bg-jungle/10":
                                admin.status === "active",
                              "text-red-600 bg-red-500/10":
                                admin.status === "inactive",
                            }
                          )}>
                          {admin.status}
                        </p>
                      </td>
                      <td>{admin.branchLocated}</td>
                      <td>{admin.email}</td>
                      <td>{admin.phone}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AdminDetailsModal
        isOpen={isAdminDetailsModalOpen}
        onClose={handleCloseModal}
        admin={selectedAdmin}
      />

      <CreateAdminModal
        isOpen={isCreateNewModalOpen}
        onClose={() => setIsCreateNewModalOpen(false)}
      />
    </>
  );
}

export default AdminList;
