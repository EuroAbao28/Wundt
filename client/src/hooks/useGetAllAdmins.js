import axios from "axios";
import { useState } from "react";
import { URL_ADMIN } from "../utils/APIRuotes";

const useGetAllAdmins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getAllAdminsFunction = async (filters = {}) => {
    setIsLoading(true);

    const token = sessionStorage.getItem("adminToken");

    try {
      const response = await axios.get(`${URL_ADMIN}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      });

      // 🕒 Delay 3 seconds before returning the data
      // await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log("ALLL ADMINS", response.data);

      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllAdminsFunction, isLoading, error, data };
};

export default useGetAllAdmins;
