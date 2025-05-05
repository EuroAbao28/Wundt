import React, { useState } from "react";
import logo from "../../assets/wundt_logo.png";
import b1 from "../../assets/b1.jpg";
import bgGradient from "../../assets/bg_gradient.png";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { URL_LOGIN } from "../../utils/APIRuotes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAdminContext } from "../../contexts/AdminContext";
import useLogin from "../../hooks/useLogin";
import { FaLock, FaEnvelope, FaUserShield } from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loginFunction, isLoading, error, data } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginFunction(formData);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-900 flex flex-col justify-center items-center">
      {/* header */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center p-4 bg-white rounded-full shadow-sm">
          <img src={logo} alt="logo" className="w-18" />
        </div>

        <h1 className="font-semibold mt-4 text-2xl">
          <span className="text-jungle ">Wundt</span> Admin Portal
        </h1>

        <p className="mt-2 text-gray-500 text-sm">
          Access your psychological services dashboard
        </p>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 rounded-xl shadow-sm bg-white p-8 max-w-md w-full">
        <p className="flex items-center justify-center gap-2 text-jungle bg-jungle/10 rounded-md text-sm font-medium text-center p-2">
          <span className="text-base">
            <FaUserShield />
          </span>
          Restricted Access
        </p>

        <label className="flex flex-col gap-1 mt-8">
          <span className="text-gray-600 text-sm font-medium">
            Email Address
          </span>
          <div className="group flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-white focus-within:ring-jungle/50 focus-within:ring-2 transition-all shadow-sm">
            <FaEnvelope className="text-gray-400 group-focus-within:text-jungle transition-all" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="focus:outline-none w-full"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1 mt-4">
          <span className="text-gray-600 text-sm font-medium">Password</span>
          <div className="group flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-white focus-within:ring-jungle/50 focus-within:ring-2 transition-all shadow-sm">
            <FaLock className="text-gray-400 group-focus-within:text-jungle transition-all" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="focus:outline-none w-full"
            />
          </div>
        </label>

        <button
          type="submit"
          className="bg-jungle text-white w-full mt-9 rounded-lg py-3 font-medium shadow-sm flex items-center gap-2 justify-center">
          {isLoading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              <span>Authenticating...</span>
            </>
          ) : (
            "Sign In"
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2025 Wundt Psychological Institute. All rights reserved.
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;
