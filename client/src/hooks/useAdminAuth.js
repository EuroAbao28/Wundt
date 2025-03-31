import axios from "axios";
import { useEffect, useState } from "react";
import { URL_GET_CURRENT_ADMIN } from "../utils/APIRuotes";
import { useNavigate } from "react-router";

const useAdminAuth = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const adminAuthFunction = async () => {
    const token = sessionStorage.getItem("adminToken");

    try {
      const response = await axios.get(URL_GET_CURRENT_ADMIN, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
      navigate("/admin/login");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    adminAuthFunction();
  }, []);

  return { isLoading, error, data };
};

export default useAdminAuth;
