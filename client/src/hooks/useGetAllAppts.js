import axios from "axios";
import { useEffect, useState } from "react";
import { URL_APPTS } from "../utils/APIRuotes";

const useGetAllAppts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getAllApptsFunction = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await axios.get(`${URL_APPTS}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);
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
