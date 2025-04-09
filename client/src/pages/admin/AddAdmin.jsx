import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

function AddAdmin() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    branch: "",
    profilePic: "",
  });

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="h-full flex flex-col gap-6">
      <h1 className="font-semibold textarea-lg mr-auto"> Create Admin</h1>

      <form className="flex gap-6 items-start w-[80%]">
        <label className="flex flex-col gap-2 w-[30%]">
          <span className="uppercase text-xs font-semibold">Profile Pic</span>
          <div
            {...getRootProps()}
            className="outline outline-gray-300 py-2 px-4 rounded focus:outline-gray-400 transition-all aspect-square">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="h-full flex flex-col justify-center items-center gap-2 text-gray-400">
                <MdCloudUpload className="text-4xl" />
                <p>Upload Image</p>
              </div>
            )}
          </div>
        </label>

        <div className="flex-1 grid grid-cols-3 gap-6 ">
          <InputField
            label="firstname"
            name="firstname"
            value={formData.firstname}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />
          <InputField
            label="middlename"
            name="middlename"
            value={formData.middlename}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />
          <InputField
            label="lastname"
            name="lastname"
            value={formData.lastname}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />

          <InputField
            label="email"
            name="email"
            value={formData.email}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />

          <InputField
            label="phone"
            name="phone"
            value={formData.phone}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />

          <InputField
            label="password"
            name="password"
            value={formData.password}
            type="password"
            minLength={2}
            maxLength={50}
            required
          />

          <InputField
            label="role"
            name="role"
            value={formData.role}
            type="text"
            minLength={2}
            maxLength={50}
            required
          />

          <InputField
            label="branch"
            name="branch"
            value={formData.branch}
            type="password"
            minLength={2}
            maxLength={50}
            required
          />

          <div className="col-span-3">
            <button
              type="submit"
              className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
              Create Admin
            </button>
          </div>
        </div>
      </form>
    </div>
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

export default AddAdmin;
