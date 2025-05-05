import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [isApptDetailsModalOpen, setIsApptDetailsModalOpen] = useState(false);
  const [isApptConfirmationModalOpen, setIsApptConfirmationModalOpen] =
    useState(false);
  const [confirmationModalType, setConfirmationModalType] = useState(null);

  const handleOpenApproveModal = () => {
    setIsApptDetailsModalOpen(false);
    setIsApptConfirmationModalOpen(true);
  };

  const handleCloseApproveModal = () => {
    setIsApptDetailsModalOpen(true);
    setIsApptConfirmationModalOpen(false);
  };

  const handleCloseBothModal = () => {
    setIsApptDetailsModalOpen(false);
    setIsApptConfirmationModalOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        isApptDetailsModalOpen,
        setIsApptDetailsModalOpen,
        selectedAppointment,
        setSelectedAppointment,
        isApptConfirmationModalOpen,
        setIsApptConfirmationModalOpen,
        confirmationModalType,
        setConfirmationModalType,

        handleOpenApproveModal,
        handleCloseApproveModal,
        handleCloseBothModal,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);
