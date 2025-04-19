import React, { useEffect, useState } from "react";
import { FaRegClock, FaRegCalendar } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import b1 from "../../assets/b1.jpg";
import classNames from "classnames";
import AOS from "aos";
import { RiServiceLine } from "react-icons/ri";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import useCreateNewAppt from "../../hooks/useCreateNewAppt";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import TIME_CONTENTS from "../../constants/TIME_CONSTANTS.JS";
import BRANCHES_CONSTANTS from "../../constants/BRANCHES_CONSTANTS.JS";
import SERVICES_CONSTANTS from "../../constants/SERVICES_CONSTANTS.JS";
import INSTRUCTIONS_CONSTANTS from "../../constants/INSTRUCTIONS_CONSTANTS.JS";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import SERVICES_OFFERED from "../../constants/SERVICES_OFFERED.JS";
import { format } from "date-fns";

function AppointmentPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    branch: "",
    selectedServices: [],
    comments: "",
  });
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const { createNewApptFunction, isLoading, error } = useCreateNewAppt();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          selectedServices: checked
            ? [...prev.selectedServices, value]
            : prev.selectedServices.filter((service) => service !== value),
        };
      } else {
        return {
          ...prev,
          [name]: name === "comments" ? value.replace(/<[^>]*>/g, "") : value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);

    console.log(formData);
  };

  const handleConfirmSubmit = async () => {
    const result = await createNewApptFunction(formData);

    console.log(result);

    if (result.success) {
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        branch: "",
        selectedServices: [],
        comments: "",
      });

      toast.success(result.data.message);
      setModalOpen(false);
    } else {
      toast.error(result.error);
      setModalOpen(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex-1 sm:mt-6 md:mt-10 sm:mb-16 sm:px-6 lg:px-12">
        <div className="max-w-7xl w-full mx-auto flex lg:items-start max-lg:flex-col gap-6 relative">
          {/* instructions */}
          <div
            style={{ backgroundImage: `url(${b1})` }}
            className="w-full lg:w-1/3 bg-center bg-cover sm:shadow-card2 sm:rounded overflow-hidden lg:sticky lg:top-28.5">
            <div className="p-6 lg:p-8 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75% h-full text-white flex flex-col">
              <h1 className="text-2xl font-semibold">Appointment Guidelines</h1>
              <div className="flex flex-col gap-6 lg:gap-8 mt-8 flex-1">
                {INSTRUCTIONS_CONSTANTS.map((insruction, index) => (
                  <div key={index} className="flex gap-4 items-start flex-1">
                    <span className="bg-white w-6 aspect-square rounded-full flex items-center justify-center text-sm font-bold text-emerald-600 mt-1">
                      {index + 1}
                    </span>
                    <section className="flex-1">
                      <h3 className="text-sm font-semibold">
                        {insruction.header}
                      </h3>
                      <p className="text-xs md:text-sm">{insruction.desc}</p>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="flex-1 px-6 md:px-12 py-8 sm:shadow-card2 sm:rounded ">
            <h1 className="text-2xl font-semibold">Appointment Form</h1>
            <form
              onSubmit={handleSubmit}
              className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
              {/* Firstname */}
              <InputField
                label="Firstname"
                name="firstname"
                value={formData.firstname}
                type="text"
                minLength={2}
                maxLength={50}
                placeholder="Juan"
                onChange={handleChange}
                required
              />

              {/* Lastname */}
              <InputField
                label="Lastname"
                name="lastname"
                value={formData.lastname}
                type="text"
                minLength={2}
                maxLength={50}
                placeholder="Dela Cruz"
                onChange={handleChange}
                required
              />

              {/* Phone */}
              <InputField
                label="Phone No."
                name="phone"
                value={formData.phone}
                type="tel"
                pattern="^(09\d{9}|\+639\d{9})$"
                maxLength={11}
                placeholder="09XXXXXXXXX"
                onChange={handleChange}
                required
                autoComplete="tel"
              />

              {/* Email */}
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                type="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                placeholder="juan@gmail.com"
                onChange={handleChange}
                required
                autoComplete="email"
              />

              {/* date */}
              <label className="flex flex-col gap-2 relative">
                <span className="uppercase text-xs font-semibold">
                  Appointment Date
                </span>
                <div className="relative">
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split("T")[0]} // so that user cant go back in time xD
                    onChange={handleChange}
                    required
                    className="outline outline-gray-300 py-2 px-4 rounded w-full max-sm:appearance-none  max-sm:[&::-webkit-calendar-picker-indicator]:hidden focus:outline-gray-400 transition-all"
                  />

                  <FaRegCalendar className="absolute top-3 right-4 max-sm:block hidden" />
                </div>
              </label>

              {/* time */}
              <label className="flex flex-col gap-2">
                <span className="uppercase text-xs font-semibold">
                  Appointment Time
                </span>
                <div className="relative">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="outline outline-gray-300 py-2 px-4 rounded appearance-none w-full focus:outline-gray-400 transition-all"
                    required>
                    <option value="" disabled hidden>
                      Select time
                    </option>
                    {TIME_CONTENTS.map((time, index) => (
                      <option key={index} value={time.value}>
                        {time.name}
                      </option>
                    ))}
                  </select>
                  <FaRegClock className="absolute top-3 right-4" />
                </div>
              </label>

              {/* branch */}
              <label className="flex flex-col gap-2">
                <span className="uppercase text-xs font-semibold">
                  Branch / Location
                </span>
                <div className="relative">
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="outline outline-gray-300 py-2 px-4 rounded appearance-none w-full focus:outline-gray-400 transition-all"
                    required>
                    <option value="" disabled hidden>
                      Select branch
                    </option>
                    {BRANCHES_CONSTANTS.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                  <RiMapPin2Line className="absolute top-2.5 right-4 text-base" />
                </div>
              </label>

              {/* comments */}
              <label className="flex flex-col gap-2 flex-1">
                <span className="uppercase text-xs font-semibold">
                  Special Requests/ Notes
                </span>
                <textarea
                  name="comments"
                  value={formData.comments}
                  type="text"
                  placeholder="Specify your concern"
                  maxLength={700}
                  onChange={handleChange}
                  rows={1}
                  required
                  className="outline outline-gray-300 py-2 px-4 resize-none rounded flex-1 scrollbar-thin focus:outline-gray-400 transition-all"
                />
              </label>

              <div className="border-dashed border-t-2 border-gray-200 col-span-full my-4"></div>

              {/* services */}
              <div className="col-span-full relative">
                <h1 className="text-2xl font-semibold ">Available Services</h1>

                <input
                  type="text"
                  value={formData.selectedServices}
                  onChange={() => {}}
                  required
                  className="absolute opacity-0 top-4"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {SERVICES_OFFERED.map((services, index) => (
                    <div key={index}>
                      <h4 className="uppercase text-xs font-semibold ">
                        {services.category}
                      </h4>
                      <div className="flex flex-col gap-1 mt-4">
                        {services.details.length > 0 ? (
                          services.details.map((detail, detailIndex) => (
                            <label
                              key={detailIndex}
                              className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                value={detail}
                                checked={formData.selectedServices.includes(
                                  detail
                                )}
                                onChange={handleChange}
                                className="w-4 h-4 accent-emerald-600"
                              />
                              {detail}
                            </label>
                          ))
                        ) : (
                          <div>No specific items under this category </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded w-full sm:w-fit py-2 px-8 mt-4 font-semibold uppercase active:scale-95 transition-all focus:outline-emerald-700 col-span-full cursor-pointer">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        as="div"
        onClose={() => setModalOpen(false)}
        className="relative z-10 font-poppins">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-xs" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-white rounded-lg max-w-2xl w-full text-gray-800 p-6 shadow">
            <h3 className="text-2xl font-semibold  text-center">
              Review Details
            </h3>
            <h5 className="text-sm italic  pb-6 text-emerald-600 text-center">
              Confirm your details before submission.
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4 sm:gap-6 rounded">
              <ReviewDetailsSection
                label="Fullname"
                value={`${formData.firstname} ${formData.lastname}`}
              />

              {/* <ReviewDetailsSection
                label="Lastname"
                value={formData.lastname}
              /> */}

              <ReviewDetailsSection label="Phone No." value={formData.phone} />

              <ReviewDetailsSection label="Email" value={formData.email} />

              <ReviewDetailsSection
                label="Date & Time"
                value={
                  formData.date &&
                  `${format(new Date(formData.date), "MMMM d, yyyy")} - ${
                    formData.time
                  }`
                }
              />

              <ReviewDetailsSection label="Branch" value={formData.branch} />

              <section className=" flex flex-col gap-2 col-span-full">
                <p className="font-semibold uppercase text-xs">
                  Comments / Notes
                </p>
                <p className="text-sm sm:text-base flex-1 -mt-1 border border-gray-300 py-1 px-2 rounded max-h-16 sm:max-h-20 overflow-y-auto scrollbar-thin">
                  {formData.comments} i need some milk
                </p>
              </section>

              <section className="text-xs sm:text-sm flex flex-col gap-1 col-span-full">
                <p className="font-semibold text-nowrap capitalize">
                  Selected Services
                </p>
                <div className="flex gap-1 sm:gap-2 flex-wrap max-h-32 overflow-y-auto scrollbar-thin">
                  {formData.selectedServices.map((service, index) => (
                    <p
                      key={index}
                      className="bg-gray-100 rounded py-1 px-2 w-fit text-xs sm:text-sm">
                      {service}
                    </p>
                  ))}
                </div>
              </section>
            </div>

            <div className="flex gap-4 items-center justify-center mt-10">
              <button
                disabled={isLoading}
                onClick={() => setModalOpen(false)}
                className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
                Cancel
              </button>

              <button
                onClick={handleConfirmSubmit}
                disabled={isLoading}
                className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center justify-center cursor-pointer">
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Submitting
                  </>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  pattern,
  minLength,
  maxLength,
  autoComplete = "off",
  onChange,
}) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="uppercase text-xs font-semibold">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        required
        className={classNames(
          "outline outline-gray-300 py-2 px-4 rounded focus:outline-gray-400 transition-all",
          {
            capitalize: name === "firstname" || name === "lastname",
          }
        )}
      />
    </label>
  );
};

const ReviewDetailsSection = ({ label, value }) => {
  return (
    <section
      className={classNames("flex flex-col gap-1  h-fit", {
        // "sm:order-1": label === "Firstname",
        // "sm:order-3": label === "Lastname",
        // "sm:order-5": label === "Phone No.",
        // "sm:order-7": label === "Email",
        // "sm:order-2": label === "Date",
        // "sm:order-4": label === "Time",
        // "sm:order-6": label === "Branch",
      })}>
      <p className="font-semibold uppercase text-xs">{label}</p>
      <p className="text-sm sm:text-base flex-1 -mt-1 border-b border-gray-300">
        {value}
      </p>
    </section>
  );
};

export default AppointmentPage;
