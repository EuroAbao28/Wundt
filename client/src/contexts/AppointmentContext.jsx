import { createContext, useContext, useEffect, useState } from "react";
import useGetAllAppts from "../hooks/useGetAllAppts";
import { useAdminContext } from "./AdminContext";
import useGetCategorizedAppts from "../hooks/useGetCategorizedAppts";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const { adminData } = useAdminContext();

  const [allAppts, setAllAppts] = useState(null);
  const [categorizedAppts, setCategorizedAppts] = useState(null);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    sort: "latest",
    time: "",
    date: "",
    createdAt: "",
    search: "",
    page: 1,
  });

  const {
    getCategorizedApptsFunction,
    isLoading: isCategorizedApptsLoading,
    error: categorizedApptsError,
  } = useGetCategorizedAppts();

  const {
    getAllApptsFunction,
    isLoading: isAllApptsLoading,
    error: allApptsError,
  } = useGetAllAppts();

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

  const fetchAllAppts = async () => {
    const data = await getAllApptsFunction(filters);
    if (data) setAllAppts(data);
  };

  // all appts
  useEffect(() => {
    if (adminData) {
      fetchAllAppts();
    }

    console.log("FILTERS", filters);
  }, [filters]);

  return (
    <AppointmentContext.Provider
      value={{
        categorizedAppts,
        isCategorizedApptsLoading,
        categorizedApptsError,

        fetchAllAppts,
        allAppts,
        isAllApptsLoading,
        allApptsError,

        filters,
        setFilters,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);
