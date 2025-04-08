import { createContext, useContext, useEffect, useState } from "react";
import LoaderAuth from "../components/LoaderAuth";
import useAdminAuth from "../hooks/useAdminAuth";
import LoaderLogout from "../components/LoaderLogout";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLogoutLoading, setLogoutLoading] = useState(false);

  // admin auth
  const {
    isLoading: isAdminLoading,
    error: adminError,
    data: adminData,
  } = useAdminAuth();

  if (isAdminLoading || adminError) return <LoaderAuth />;

  if (isLogoutLoading) return <LoaderLogout />;

  return (
    <AdminContext.Provider
      value={{
        isLogoutLoading,
        setLogoutLoading,
        isAdminLoading,
        adminError,
        adminData,

        isLogoutModalOpen,
        setIsLogoutModalOpen,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
