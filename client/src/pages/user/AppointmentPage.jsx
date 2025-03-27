import React, { useEffect, useState } from "react";
import { FaRegClock, FaRegCalendar } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import b1 from "../../assets/b1.jpg";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

const instructionContents = [
  {
    header: "Fill in Your Details",
    desc: "Enter your first name, last name, phone number, and email address.",
  },
  {
    header: "Select a Date & Time",
    desc: "Choose your preferred appointment schedule.",
  },
  {
    header: "Choose a Service",
    desc: "Select at least one service that suits your needs.",
  },
  {
    header: "Add Additional Notes",
    desc: " Specify any concerns or special requests.",
  },
  {
    header: "Submit Your Form",
    desc: " Click the submit to complete your appointment request.",
  },
  {
    header: "Wait for Confirmation",
    desc: "You will receive an email at the address you provided regarding the status of your appointment.",
  },
];

const servicesContents = [
  "Psychological & Psychiatric Testing/Assessments",
  "Child & Adolescent Assessments",
  "Clinical Consultation & Counseling",
  "Tutorial & Review Classes",
  "Program Development & Administration",
  "Trainings & Workshops",
];

const timeContents = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const branchesContents = [
  "Dagupan City",
  "Vigan City",
  "Urdaneta City",
  "Mangaldan",
];

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

    console.log("Form Data:", formData);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex-1 sm:mt-6 md:mt-10 sm:mb-16 sm:px-6 lg:px-12">
        <div className="max-w-7xl w-full mx-auto sm:rounded flex max-lg:flex-col  sm:shadow-card2 overflow-hidden">
          {/* instructions */}
          <div
            style={{ backgroundImage: `url(${b1})` }}
            className="w-full lg:w-1/3 bg-center bg-cover">
            <div className="p-6 lg:p-8 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75% h-full text-white flex flex-col">
              <h1 className="text-2xl font-semibold">
                Appointment Guidelines{" "}
              </h1>
              <div className="flex flex-col gap-4 mt-8 flex-1">
                {instructionContents.map((insruction, index) => (
                  <div key={index} className="flex gap-4 items-start flex-1">
                    <span className="bg-white w-6 aspect-square rounded-full flex items-center justify-center text-sm font-bold text-emerald-600 mt-1">
                      {index + 1}
                    </span>
                    <section className="flex-1">
                      <h3 className="text-sm font-semibold">
                        {insruction.header}
                      </h3>
                      <p className="text-xs">{insruction.desc}</p>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="flex-1 px-6 md:px-12 py-8">
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
                    {timeContents.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <FaRegClock className="absolute top-3 right-4" />
                </div>
              </label>

              {/* services */}
              <div className="flex flex-col gap-2">
                <div className=" text-xs font-semibold flex justify-between">
                  <label className="uppercase">Available Services</label>
                  {formData.selectedServices.length < 1 && (
                    <span className=" text-red-500 font-normal italic text-xxs">
                      *Select at least one service
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 outline outline-gray-300 rounded p-4">
                  {servicesContents.map((service, index) => (
                    <label key={index} className="flex items-center gap-2 ">
                      <input
                        type="checkbox"
                        value={service}
                        onChange={handleChange}
                        className="w-4 aspect-square accent-emerald-600 "
                      />
                      <span className="text-xs">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* branch & comments */}
              <div className="flex flex-col gap-y-4">
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
                      {branchesContents.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                    <RiMapPin2Line className="absolute top-2.5 right-4 text-base" />
                  </div>
                </label>

                {/* comments */}
                <label className="flex flex-col gap-2  max-md:h-44 flex-1">
                  <span className="uppercase text-xs font-semibold">
                    Comments / Notes
                  </span>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    type="text"
                    placeholder="Specify your concern"
                    maxLength={700}
                    onChange={handleChange}
                    required
                    className="outline outline-gray-300 py-2 px-4 rounded resize-none flex-1 scrollbar-thin focus:outline-gray-400 transition-all"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded w-full sm:w-fit py-2 px-8 mt-4 font-semibold uppercase active:scale-95 transition-all focus:outline-emerald-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <dialog
        className={classNames("modal p-2 sm:p-6 backdrop-blur-sm", {
          "modal-open": isModalOpen,
        })}>
        <div className="modal-box bg-white rounded p-4 sm:p-6 max-w-2xl w-full ">
          <h3 className="text-xl font-semibold text-center">Review Details</h3>
          <h5 className="text-xs italic text-center text-emerald-600">
            Confirm your details before submission.
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-x-4 outline outline-gray-200 rounded p-6">
            <ReviewDetailsSection
              label="Firstname"
              value={formData.firstname}
            />

            <ReviewDetailsSection label="Lastname" value={formData.lastname} />

            <ReviewDetailsSection label="Phone No." value={formData.phone} />

            <ReviewDetailsSection label="Email" value={formData.email} />

            <ReviewDetailsSection label="Date" value={formData.date} />

            <ReviewDetailsSection label="Time" value={formData.time} />

            <ReviewDetailsSection label="Branch" value={formData.branch} />

            <div className="grid sm:grid-cols-2 sm:col-span-2  border-t border-gray-200  mt-2  pt-2">
              <section className="text-xs sm:text-sm flex flex-col py-1 gap-y-2">
                <p className="font-semibold text-nowrap capitalize">
                  Selected Services :
                </p>
                <div className="flex gap-1 sm:gap-2 flex-wrap max-h-32 overflow-y-auto">
                  {formData.selectedServices.map((service, index) => (
                    <p
                      key={index}
                      className="bg-emerald-300/10 rounded py-1 px-2 w-fit text-xs">
                      {service}
                    </p>
                  ))}
                </div>
              </section>

              <section className="text-xs sm:text-sm flex flex-col py-1 gap-y-2">
                <p className="font-semibold text-nowrap capitalize">
                  Comments / Notes :
                </p>
                <p className="outline outline-gray-300 p-2 rounded flex-1 max-h-32 overflow-y-auto text-xs scrollbar-thin">
                  {formData.comments}
                </p>
              </section>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center mt-6">
            <button
              onClick={() => setModalOpen(false)}
              className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1">
              Cancel
            </button>

            <button className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1">
              Submit
            </button>
          </div>
        </div>
      </dialog>
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
        className="outline outline-gray-300 py-2 px-4 rounded focus:outline-gray-400 transition-all"
      />
    </label>
  );
};

const ReviewDetailsSection = ({ label, value }) => {
  return (
    <section className="text-xs sm:text-sm flex py-1 gap-x-4 gap-y-2">
      <p className="font-semibold text-nowrap capitalize w-18 sm:min-w-[25%]">
        {label} :
      </p>
      <p className="flex-1">{value}</p>
    </section>
  );
};

export default AppointmentPage;
