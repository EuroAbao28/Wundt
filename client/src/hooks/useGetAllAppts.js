import axios from "axios";
import { useState } from "react";
import { URL_APPTS } from "../utils/APIRuotes";

const useGetAllAppts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getAllApptsFunction = async (filters = {}) => {
    setIsLoading(true);

    const token = sessionStorage.getItem("adminToken");

    try {
      const response = await axios.get(`${URL_APPTS}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      });

      console.log(filters);

      // 🕒 Delay 3 seconds before returning the data
      // await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log("ALL APPTS", response.data);

      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllApptsFunction, isLoading, error, data };
};

export default useGetAllAppts;
