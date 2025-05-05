import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { FaSave, FaUserEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import personPlaceholder from "../assets/person_placeholder.jpg";

function AdminDetailsModal({ isOpen, onClose, admin }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editForm, setEditForm] = useState(admin);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditForm(admin);
  };

  const handleCloseModal = () => {
    setIsEditMode(false);
    setEditForm(admin);
    onClose();
  };

  useEffect(() => {
    if (admin) {
      setEditForm(admin);
    }
  }, [admin]);

  return (
    <Dialog open={isOpen} onClose={handleCloseModal} className="relative z-50">
      {/* Backdrop */}
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      </TransitionChild>

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-8">
          <DialogPanel className="font-poppins text-gray-900 w-full max-w-5xl rounded-2xl bg-white shadow-xl overflow-hidden flex relative">
            {/* close button */}
            <div
              onClick={handleCloseModal}
              className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full text-2xl text-gray-600 cursor-pointer transition-all">
              <IoClose />
            </div>

            {/* image */}
            <div className="w-[20rem] bg-gray-50 p-6 flex flex-col items-center justify-center">
              <div className="w-full aspect-square bg-white shadow-md rounded-xl overflow-hidden p-3">
                <img
                  src={admin?.profilePic || personPlaceholder}
                  alt={admin?.firstname}
                  className="w-full h-full object-center object-cover rounded-xl"
                />
              </div>
            </div>

            {/* desc */}
            <div className="flex-1 bg-white px-6 py-8">
              <h2 className="text-lg font-semibold">Admin Details</h2>

              {/* edit mode warning */}
              <p
                className={classNames(
                  "bg-orange-500/10 text-orange-500 px-4 mt-2 font-medium text-sm flex items-center gap-2 overflow-hidden transition-all",
                  {
                    "max-h-40 py-2 animate-pulse": isEditMode,
                    "max-h-0": !isEditMode,
                  }
                )}>
                <IoWarning className="text-lg" />
                Edit Mode
              </p>

              <form className="mt-4 grid grid-cols-3 gap-x-6 gap-y-4">
                <InputField
                  label="Firstname"
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={editForm?.firstname}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />

                <InputField
                  label="Middlename"
                  type="text"
                  name="middlename"
                  placeholder="Middlename"
                  value={editForm?.middlename}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />

                <InputField
                  label="Lastname"
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={editForm?.lastname}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />

                <InputField
                  colSpan={2}
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={editForm?.email}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone No."
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={editForm?.phone}
                  disabled={!isEditMode}
                  onChange={handleChange}
                />

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    role
                  </span>
                  {isEditMode ? (
                    <div className="relative">
                      <select
                        name="role"
                        value={editForm?.role}
                        onChange={handleChange}
                        className="outline outline-gray-200 px-3 py-2 rounded focus:outline-gray-400 appearance-none w-full">
                        <option value="author">Author</option>
                        <option value="admin">Admin</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                    </div>
                  ) : (
                    <p className="outline outline-gray-200 px-3 py-2 rounded break-all capitalize">
                      {admin?.role}
                    </p>
                  )}
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Branch
                  </span>
                  {isEditMode ? (
                    <div className="relative">
                      <select
                        name="branchLocated"
                        value={editForm?.branchLocated}
                        onChange={handleChange}
                        className="outline outline-gray-200 px-3 py-2 rounded focus:outline-gray-400 appearance-none w-full">
                        <option value="Dagupan City">Dagupan City</option>
                        <option value="Vigan City">Vigan City</option>
                        <option value="Urdaneta City">Urdaneta City</option>
                        <option value="Mangaldan">Mangaldan</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                    </div>
                  ) : (
                    <p className="outline outline-gray-200 px-3 py-2 rounded break-all capitalize">
                      {admin?.branchLocated}
                    </p>
                  )}
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Status
                  </span>

                  {isEditMode ? (
                    <div className="relative">
                      <select
                        name="status"
                        value={editForm?.status}
                        onChange={handleChange}
                        className="outline outline-gray-200 px-3 py-2 rounded focus:outline-gray-400 appearance-none w-full">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                    </div>
                  ) : (
                    <div className="outline outline-gray-200 px-3 py-2 rounded">
                      <p
                        className={classNames(
                          "capitalize w-fit px-2 rounded-full font-medium",
                          {
                            "text-jungle bg-jungle/10":
                              admin?.status === "active",
                            "text-red-500 bg-red-500/10":
                              admin?.status === "inactive",
                          }
                        )}>
                        {admin?.status}
                      </p>
                    </div>
                  )}
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Created At
                  </span>
                  <p className="outline outline-gray-200 px-3 py-2 rounded">
                    {admin?.createdAt &&
                      format(new Date(admin.createdAt), "MMMM d , yyyy")}
                  </p>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Last Update
                  </span>
                  <p className="outline outline-gray-200 px-3 py-2 rounded">
                    {admin?.updatedAt &&
                      format(new Date(admin.updatedAt), "MMMM d , yyyy")}
                  </p>
                </label>
              </form>

              <div className="flex gap-4">
                {isEditMode ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="mt-12 bg-gray-200 text-gray-600  px-8 py-2 uppercase text-sm font-semibold rounded flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
                      Cancel
                    </button>
                    <button className="mt-12 bg-jungle text-white px-8 py-2 uppercase text-sm font-semibold rounded flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
                      <FaSave className="text-base -mt-0.5" />
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="mt-12 bg-therapy-blue text-white px-8 py-2 uppercase text-sm font-semibold rounded flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
                    <FaUserEdit className="text-base -mt-0.5" />
                    Edit
                  </button>
                )}
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}

const InputField = ({
  colSpan = 1,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  return (
    <label className={`col-span-${colSpan} flex flex-col gap-1`}>
      <span className="uppercase text-xs text-gray-500 font-semibold">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        minLength={2}
        maxLength={30}
        onChange={onChange}
        disabled={disabled}
        required
        className="outline outline-gray-200 px-3 py-2 rounded break-all focus:outline-gray-400"
      />
    </label>
  );
};

export default AdminDetailsModal;
