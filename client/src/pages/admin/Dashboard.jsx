import {
  TbCalendarCheck,
  TbCalendarCancel,
  TbCalendarX,
  TbCalendarUp,
} from "react-icons/tb";
import { useEffect, useState } from "react";
import classNames from "classnames";
import ApptsListContainer from "../../components/ApptsListContainer";
import AppointmentModal from "../../components/AppointmentModal";
import toast from "react-hot-toast";
import useUpdateStatusAppt from "../../hooks/useUpdateStatusAppt";
import { useAppointmentContext } from "../../contexts/AppointmentContext";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const { categorizedAppts, isCategorizedApptsLoading, categorizedApptsError } =
    useAppointmentContext();

  const {
    approveApptFunction,
    isApproveLoading,
    isDeclineLoading,
    isCancelLoading,
  } = useUpdateStatusAppt();

  const handleShowModal = (data) => {
    setSelectedAppointment(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
    setIsModalOpen(false);
  };

  const handleUpdateStatus = async (updatedStatus) => {
    const result = await approveApptFunction(
      selectedAppointment._id,
      updatedStatus
    );

    console.log(result);

    if (result.success) {
      toast.success(result.data.message);
      handleCloseModal();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <SummaryCard
            icon={<TbCalendarUp />}
            title={"Total Appointments"}
            count={categorizedAppts?.total || 0}
            color={"emerald"}
          />

          <SummaryCard
            icon={<TbCalendarCheck />}
            title={"Completed Sessions"}
            count={categorizedAppts?.completed?.length || 0}
            color={"sky"}
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

      <AppointmentModal
        isModalOpen={isModalOpen}
        appointment={selectedAppointment}
        handleCloseModal={handleCloseModal}
        handleUpdateStatus={handleUpdateStatus}
        isApproveLoading={isApproveLoading}
        isDeclineLoading={isDeclineLoading}
        isCancelLoading={isCancelLoading}
      />
    </>
  );
}

const SummaryCard = ({ icon, title, count, color }) => {
  return (
    <div className="flex items-center gap-4 rounded shadow-sm p-4 flex-1">
      <p
        className={classNames("text-4xl p-2 rounded-md", {
          "text-sky-600 bg-sky-100": color === "sky",
          "text-emerald-600 bg-emerald-100": color === "emerald",
          "text-orange-500 bg-orange-100": color === "orange",
          "text-red-600 bg-red-100": color === "red",
          "text-gray-800 bg-gray-100": color === "gray",
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
