import axios from "axios";
import { URL_GET_CURRENT_ADMIN } from "../utils/APIRuotes";
import { useQuery } from "@tanstack/react-query";

export const useAdminAuth = () => {
  return useQuery({
    queryKey: ["currentAdmin"],
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("No token found");

      const response = await axios.get(URL_GET_CURRENT_ADMIN, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      return response.data;
    },
    retry: false,
  });
};
