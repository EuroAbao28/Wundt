import axios from "axios";
import { URL_APPTS } from "../utils/APIRuotes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllAppts = (adminSuccess) => {
  return useQuery({
    queryKey: ["allAppts"],
    enabled: adminSuccess,
    // retry: false,
    // refetchOnWindowFocus: false,
    queryFn: async () => {
      const token = localStorage.getItem("adminToken");
      // Add 5-second delay
      //   await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.get(URL_APPTS, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);
      return response.data;
    },
  });
};

export const useCreateNewAppt = (onSuccessCallback, onErrorCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newAppt) => {
      const response = await axios.post(URL_APPTS, newAppt);
      return response.data;

      // await new Promise((resolve) => setTimeout(resolve, 5000));
      // return "YEEY";
    },
    onSuccess: (data) => {
      // create a socket

      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
    onError: (error) => {
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
    retry: false,
  });
};
