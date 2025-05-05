import {
  TbCalendarCheck,
  TbCalendarCancel,
  TbCalendarX,
  TbCalendarUp,
} from "react-icons/tb";
import { useEffect, useState } from "react";
import classNames from "classnames";
import ApptsListContainer from "../../components/ApptsListContainer";
import toast from "react-hot-toast";
import useUpdateStatusAppt from "../../hooks/useUpdateStatusAppt";
import { useAppointmentContext } from "../../contexts/AppointmentContext";
import useGetCategorizedAppts from "../../hooks/useGetCategorizedAppts";
import AppointmentDetailsModal from "../../components/AppointmentDetailsModal";
import AppointmentConfirmationModal from "../../components/AppointmentConfirmationModal";

function Dashboard() {
  const {
    isApptDetailsModalOpen,
    setIsApptDetailsModalOpen,
    selectedAppointment,
    setSelectedAppointment,
    isApptConfirmationModalOpen,
  } = useAppointmentContext();

  const {
    getCategorizedApptsFunction,
    isLoading: isCategorizedApptsLoading,
    error: categorizedApptsError,
    data: categorizedAppts,
  } = useGetCategorizedAppts();

  const {
    approveApptFunction,
    isApproveLoading,
    isDeclineLoading,
    isCancelLoading,
  } = useUpdateStatusAppt();

  const handleShowModal = (data) => {
    setSelectedAppointment(data);
    setIsApptDetailsModalOpen(true);
  };

  const handleUpdateStatus = async (updatedStatus) => {
    const result = await approveApptFunction(
      selectedAppointment._id,
      updatedStatus
    );

    console.log(result);

    if (result.success) {
      toast.success(result.data.message);

      setIsApptDetailsModalOpen(false);
    } else {
      toast.error(result.error);
    }
  };

  useEffect(() => {
    getCategorizedApptsFunction();
  }, []);

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <SummaryCard
            icon={<TbCalendarUp />}
            title={"Total Appointments"}
            count={categorizedAppts?.total || 0}
            color={"jungle"}
          />

          <SummaryCard
            icon={<TbCalendarCheck />}
            title={"Completed Sessions"}
            count={categorizedAppts?.completed?.length || 0}
            color={"therapy-blue"}
          />

          <SummaryCard
            icon={<TbCalendarCancel />}
            title={"Canceled Appointments"}
            count={categorizedAppts?.canceled?.length || 0}
            color={"red"}
          />

          <SummaryCard
            icon={<TbCalendarX />}
            title={"Declined Requests"}
            count={categorizedAppts?.declined?.length || 0}
            color={"gray"}
          />
        </div>

        <div className="mt-6 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ApptsListContainer
            title="Today's Appointments"
            appointments={categorizedAppts?.today}
            handleSelectAppt={handleShowModal}
            isLoading={isCategorizedApptsLoading}
            error={categorizedApptsError}
          />

          <ApptsListContainer
            title="Upcoming Appointments"
            appointments={categorizedAppts?.upcoming}
            handleSelectAppt={handleShowModal}
            isLoading={isCategorizedApptsLoading}
            error={categorizedApptsError}
          />

          <ApptsListContainer
            title="Appointment Requests"
            appointments={categorizedAppts?.pending}
            handleSelectAppt={handleShowModal}
            isLoading={isCategorizedApptsLoading}
            error={categorizedApptsError}
          />
        </div>
      </div>

      <AppointmentDetailsModal
        isOpen={isApptDetailsModalOpen}
        onClose={() => setIsApptDetailsModalOpen(false)}
        appointment={selectedAppointment}
        handleUpdateStatus={handleUpdateStatus}
        isApproveLoading={isApproveLoading}
        isDeclineLoading={isDeclineLoading}
        isCancelLoading={isCancelLoading}
      />

      <AppointmentConfirmationModal isOpen={isApptConfirmationModalOpen} />
    </>
  );
}

const SummaryCard = ({ icon, title, count, color }) => {
  return (
    <div className="flex items-center gap-4 rounded shadow-sm p-4 flex-1">
      <p
        className={classNames("text-4xl p-2 rounded-md", {
          "text-therapy-blue bg-therapy-blue/5": color === "therapy-blue",
          "text-jungle bg-jungle/5": color === "jungle",
          "text-orange-500 bg-orange-500/5": color === "orange",
          "text-red-600 bg-red-500/5": color === "red",
          "text-gray-800 bg-gray-800/5": color === "gray",
        })}>
        {icon}
      </p>
      <div>
        <h3 className="text-sm">{title}</h3>
        <p className="font-bold text-xl">{count}</p>
      </div>
    </div>
  );
};

export default Dashboard;
