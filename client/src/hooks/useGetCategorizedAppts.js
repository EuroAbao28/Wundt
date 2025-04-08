import axios from "axios";
import { useEffect, useState } from "react";
import { URL_APPTS } from "../utils/APIRuotes";

const useGetCategorizedAppts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategorizedApptsFunction = async () => {
    const token = sessionStorage.getItem("adminToken");

    try {
      const response = await axios.get(`${URL_APPTS}/categorized`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 🕒 Delay 3 seconds before returning the data
      // await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log("CATEG APPTS", response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getCategorizedApptsFunction, isLoading, error };
};

export default useGetCategorizedAppts;
