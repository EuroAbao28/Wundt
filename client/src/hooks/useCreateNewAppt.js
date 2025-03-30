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

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createNewApptFunction, isLoading };
};

export default useCreateNewAppt;
