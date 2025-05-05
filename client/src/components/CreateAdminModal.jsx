import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import useCreateAdmin from "../hooks/useCreateAdmin";
import toast from "react-hot-toast";

function CreateAdminModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    role: "",
    branchLocated: "",
    status: "",
    profilePic: {},
    password: "",
    confirmPassword: "",
  });
  const [previewImage, setPreviewImage] = useState(null);

  const { createAdminFunction, isLoading } = useCreateAdmin();

  const handleClose = () => {
    onClose();

    setPreviewImage(null);
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      phone: "",
      role: "",
      branchLocated: "",
      status: "",
      profilePic: {},
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        setFormData((prev) => ({
          ...prev,
          profilePic: file,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
      setFormData((prev) => ({
        ...prev,
        profilePic: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(previewImage);
    // console.log(formData);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const formDataToSend = new FormData();

    // Append all form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && key !== "confirmPassword") {
        formDataToSend.append(key, value);
      }
    });

    const result = await createAdminFunction(formDataToSend);

    if (result.admin) {
      toast.success(result.message);
      handleClose();
    } else {
      toast.error(result.response.data.message);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
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
              onClick={handleClose}
              className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full text-2xl text-gray-600 cursor-pointer transition-all">
              <IoClose />
            </div>

            {/* image */}
            <div className="w-[20rem] bg-gray-50 p-6 flex flex-col items-center justify-center">
              <div className="w-full aspect-square bg-white shadow-md rounded-xl overflow-hidden p-3 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                {previewImage ? (
                  <img
                    src={previewImage}
                    alt=""
                    className="w-full h-full object-center object-cover rounded-xl"
                  />
                ) : (
                  <div className="h-full flex flex-col gap-2 items-center justify-center text-gray-600">
                    <RiFolderUploadLine className="text-4xl " />
                    Upload Image
                  </div>
                )}
              </div>

              {formData.profilePic && (
                <div className="mt-4 text-center text-sm">
                  {formData.profilePic.name}
                </div>
              )}
            </div>

            {/* desc */}
            <div className="flex-1 bg-white px-6 py-8">
              <h2 className="text-lg font-semibold">Create New Admin</h2>

              <form
                onSubmit={handleSubmit}
                className="mt-4 grid grid-cols-3 gap-x-6 gap-y-4">
                <InputField
                  label="Firstname"
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />

                <InputField
                  label="Middlename"
                  type="text"
                  name="middlename"
                  placeholder="Middlename"
                  value={formData.middlename}
                  onChange={handleChange}
                />

                <InputField
                  label="Lastname"
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />

                <InputField
                  colSpan={2}
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone No."
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  pattern="^(09|\+639)\d{9}$"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    role
                  </span>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="outline outline-gray-200 px-3 py-2 rounded focus:outline-2 focus:outline-gray-400 appearance-none w-full">
                      <option value="" disabled hidden></option>
                      <option value="author">Author</option>
                      <option value="admin">Admin</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                  </div>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Branch
                  </span>
                  <div className="relative">
                    <select
                      name="branchLocated"
                      value={formData.branchLocated}
                      onChange={handleChange}
                      required
                      className="outline outline-gray-200 px-3 py-2 rounded focus:outline-2 focus:outline-gray-400 appearance-none w-full">
                      <option value="" disabled hidden></option>
                      <option value="Dagupan City">Dagupan City</option>
                      <option value="Vigan City">Vigan City</option>
                      <option value="Urdaneta City">Urdaneta City</option>
                      <option value="Mangaldan">Mangaldan</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                  </div>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="uppercase text-xs text-gray-500 font-semibold">
                    Status
                  </span>
                  <div className="relative">
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                      className="outline outline-gray-200 px-3 py-2 rounded focus:outline-2 focus:outline-gray-400 appearance-none w-full">
                      <option value="" disabled hidden></option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
                  </div>
                </label>

                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <div className="mt-12 col-span-full">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className=" bg-jungle text-white px-8 py-2 uppercase text-sm font-semibold rounded flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
                    {isLoading ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Creating
                      </>
                    ) : (
                      <>
                        <FaSave className="text-base -mt-0.5" />
                        Create
                      </>
                    )}
                  </button>
                </div>
              </form>
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
  pattern,
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
        // placeholder={placeholder}
        value={value}
        minLength={2}
        maxLength={30}
        pattern={pattern}
        onChange={onChange}
        disabled={disabled}
        required
        className="outline outline-gray-200 px-3 py-2 rounded break-all focus:outline-gray-400"
      />
    </label>
  );
};

export default CreateAdminModal;
