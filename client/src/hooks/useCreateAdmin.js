import axios from "axios";
import { useState } from "react";
import { URL_ADMIN } from "../utils/APIRuotes";

const useCreateAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createAdminFunction = async (formData) => {
    setIsLoading(true);

    const token = sessionStorage.getItem("adminToken");

    try {
      const response = await axios.post(URL_ADMIN, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("CREATED ADMIN", response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createAdminFunction, isLoading };
};

export default useCreateAdmin;
