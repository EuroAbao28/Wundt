import axios from "axios";
import { useState } from "react";
import { URL_LOGIN } from "../utils/APIRuotes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginFunction = async (credentials) => {
    setIsLoading(true);

    try {
      const response = await axios.post(URL_LOGIN, credentials);

      localStorage.setItem("adminToken", response.data.token);
      toast.success(response.data.message);

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginFunction, isLoading };
};

export default useLogin;
