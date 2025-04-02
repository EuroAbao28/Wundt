import { createContext, useContext, useEffect, useState } from "react";
import LoaderAuth from "../components/LoaderAuth";
import { socket } from "../lib/socket";
import useAdminAuth from "../hooks/useAdminAuth";
import useGetAllAppts from "../hooks/useGetAllAppts";
import LoaderLogout from "../components/LoaderLogout";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isLogoutLoading, setLogoutLoading] = useState(false);

  // // admin auth
  // const {
  //   isLoading: isAdminLoading,
  //   error: adminError,
  //   data: adminData,
  // } = useAdminAuth();

  // // get all appointments
  // const {
  //   getAllApptsFunction,
  //   isLoading: isAllApptsLoading,
  //   error: allApptsError,
  //   data: allApptsData,
  // } = useGetAllAppts();

  // // get all appt when admin is successfully logged in
  // useEffect(() => {
  //   if (!isAdminLoading && !adminError) {
  //     getAllApptsFunction();
  //   }
  // }, [isAdminLoading]);

  // if (isAdminLoading || adminError) return <LoaderAuth />;

  if (isLogoutLoading) return <LoaderLogout />;

  return (
    <AdminContext.Provider
      value={{
        // isLogoutLoading,
        setLogoutLoading,
        // // isAdminLoading,
        // adminError,
        // adminData,
        // isAllApptsLoading,
        // allApptsError,
        // allApptsData,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
