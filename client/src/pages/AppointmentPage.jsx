import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import b1 from "../assets/b1.jpg";

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
        className="outline outline-slate-300 py-2 px-4 rounded"
      />
    </label>
  );
};

function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    date: "",
    time: "",
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

    console.log("Form Data:", formData);
  };

  return (
    <div className="px-6 lg:px-12 ">
      <div className="max-w-7xl w-full mx-auto rounded flex max-lg:flex-col mt-32 shadow-card2 overflow-hidden">
        <div
          style={{ backgroundImage: `url(${b1})` }}
          className="w-full lg:w-1/3 bg-center bg-cover"
        >
          <div className="p-6 lg:p-8 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75% h-full text-white flex flex-col">
            <h1 className="text-2xl font-semibold">Appointment Guidelines </h1>
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

        <div className="flex-1 px-6 md:px-12 py-8">
          <h1 className="text-2xl font-semibold">Appointment Form</h1>
          <form
            onSubmit={handleSubmit}
            className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8"
          >
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
            <label className="flex flex-col gap-2">
              <span className="uppercase text-xs font-semibold">
                Appointment Date
              </span>
              <input
                name="date"
                type="date"
                value={formData.date}
                min={new Date().toISOString().split("T")[0]} // so that user cant go back in time xD
                onChange={handleChange}
                required
                className="outline outline-slate-300 py-2 px-4 rounded"
              />
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
                  className="outline outline-slate-300 py-2 px-4 rounded appearance-none w-full"
                  required
                >
                  <option value="" disabled hidden>
                    Select time
                  </option>
                  {[
                    "09:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "01:00 PM",
                    "02:00 PM",
                    "03:00 PM",
                    "04:00 PM",
                  ].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <FaRegClock className="absolute top-3 right-4" />
              </div>
            </label>

            {/* services */}
            <div className="flex flex-col gap-2 ">
              <div className=" text-xs font-semibold flex justify-between">
                <label className="uppercase">Available Services</label>
                {formData.selectedServices.length < 1 && (
                  <span className=" text-red-500 font-normal italic">
                    *Select at least one service
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 outline outline-slate-300 rounded p-4">
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

            {/* comments */}
            <label className="flex flex-col gap-2  max-md:h-44">
              <span className="uppercase text-xs font-semibold">
                Comments or Notes
              </span>
              <textarea
                name="comments"
                value={formData.comments}
                type="text"
                placeholder="Specify your concern"
                maxLength={700}
                onChange={handleChange}
                required
                className="outline outline-slate-300 py-2 px-4 rounded  resize-none flex-1"
              />
            </label>

            <button
              type="submit"
              className="bg-emerald-600 text-white rounded w-fit py-2 px-8 mt-4 font-semibold uppercase"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentPage;
