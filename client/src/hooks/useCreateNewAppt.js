import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { URL_APPTS } from "../utils/APIRuotes";

const useCreateNewAppt = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createNewApptFunction = async (newAppt) => {
    setIsLoading(true);

    console.log(newAppt);
    try {
      const response = await axios.post(URL_APPTS, newAppt);

      return { success: true, data: response.data, error: null };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error.response?.data?.message || "Something went wrong!",
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { createNewApptFunction, isLoading };
};

export default useCreateNewAppt;
