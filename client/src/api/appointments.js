import axios from "axios";
import { URL_GET_ALL_APPTS } from "../utils/APIRuotes";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAppts = (adminSuccess) => {
  return useQuery({
    queryKey: ["allAppts"],
    enabled: adminSuccess,
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      // Add 5-second delay
      //   await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.get(URL_GET_ALL_APPTS, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);
      return response.data;
    },
  });
};
