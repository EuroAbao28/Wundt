import axios from "axios";
import { createContext, useContext, useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import LoaderAuth from "../components/LoaderAuth";
import { useAdminAuth } from "../api/admin";
import { useGetAllAppts } from "../api/appointments";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: adminData,
    isLoading: isAdminLoading,
    isError: isAdminError,
    error: adminError,
    isSuccess: adminSuccess,
  } = useAdminAuth();

  // if (isAdminError) return console.log(adminError );

  const {
    data: appointmentsData,
    isLoading: isAppointmentsLoading,
    isError: isAppointmentsError,
    error: appointmentsError,
  } = useGetAllAppts(adminSuccess);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    queryClient.removeQueries(); // clear all cache (currentAdmin, allAppts)
    navigate("/admin/login");

    console.log("logged out and cleared all");
  };

  useEffect(() => {
    if (isAdminError) {
      console.error("Auth error:", adminError);
      handleLogout();
    }
  }, [isAdminError]);

  const contextValue = useMemo(
    () => ({
      handleLogout,
      adminData,
      isAdminLoading,
      isAppointmentsLoading,
      appointmentsData,
      isAppointmentsError,
      appointmentsError,
    }),
    [
      adminData,
      isAdminLoading,
      isAppointmentsLoading,
      appointmentsData,
      isAppointmentsError,
      appointmentsError,
    ]
  );

  if (isAdminLoading || isAdminError) return <LoaderAuth />;

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
