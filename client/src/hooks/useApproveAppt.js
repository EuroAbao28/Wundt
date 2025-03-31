import axios from "axios";
import { useState } from "react";
import { URL_APPROVE_APPT } from "../utils/APIRuotes";

const useApproveAppt = () => {
  const [isLoading, setIsLoading] = useState(false);

  const approveApptFunction = async (id) => {
    setIsLoading(true);

    try {
      const response = await axios.patch(`${URL_APPROVE_APPT}/${id}`);

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

  return { approveApptFunction, isLoading };
};

export default useApproveAppt;
