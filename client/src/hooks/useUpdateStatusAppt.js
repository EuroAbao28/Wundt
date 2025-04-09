import axios from "axios";
import { useState } from "react";
import { URL_APPROVE_APPT } from "../utils/APIRuotes";

const useUpdateStatusAppt = () => {
  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isDeclineLoading, setIsDeclineLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const [isCompleteLoading, setIsCompleteLoading] = useState(false);

  const approveApptFunction = async (id, updatedStatus) => {
    const token = sessionStorage.getItem("adminToken");

    console.log(updatedStatus);

    if (updatedStatus === "approved") setIsApproveLoading(true);
    else if (updatedStatus === "declined") setIsDeclineLoading(true);
    else if (updatedStatus === "canceled") setIsCancelLoading(true);
    else if (updatedStatus === "completed") setIsCompleteLoading(true);

    try {
      const response = await axios.patch(
        `${URL_APPROVE_APPT}/${id}`,
        {
          updatedStatus,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return { success: true, data: response.data, error: null };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error.response?.data?.message || "Something went wrong!",
      };
    } finally {
      setIsApproveLoading(false);
      setIsDeclineLoading(false);
      setIsCancelLoading(false);
      setIsCompleteLoading(false);
    }
  };

  return {
    approveApptFunction,
    isApproveLoading,
    isDeclineLoading,
    isCancelLoading,
    isCompleteLoading,
  };
};

export default useUpdateStatusAppt;
