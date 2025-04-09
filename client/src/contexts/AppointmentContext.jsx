import { createContext, useContext, useEffect, useState } from "react";
import useGetAllAppts from "../hooks/useGetAllAppts";
import { useAdminContext } from "./AdminContext";
import useGetCategorizedAppts from "../hooks/useGetCategorizedAppts";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const { adminData } = useAdminContext();

  const [allAppts, setAllAppts] = useState(null);
  const [categorizedAppts, setCategorizedAppts] = useState(null);

  const {
    getCategorizedApptsFunction,
    isLoading: isCategorizedApptsLoading,
    error: categorizedApptsError,
  } = useGetCategorizedAppts();

  // categorized appts
  useEffect(() => {
    const fetchCategorizedAppts = async () => {
      const data = await getCategorizedApptsFunction();
      if (data) setCategorizedAppts(data);
    };

    if (adminData) {
      fetchCategorizedAppts();
    }
  }, [adminData]);

  return (
    <AppointmentContext.Provider
      value={{
        categorizedAppts,
        isCategorizedApptsLoading,
        categorizedApptsError,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);
