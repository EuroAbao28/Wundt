import React, { useState } from "react";
import { useAdminContext } from "../contexts/AdminContext";
import { format } from "date-fns";
import ApptDescModal from "./ApptDescModal";
import axios from "axios";
import { URL_APPROVE_APPT } from "../utils/APIRuotes";
import useApproveAppt from "../hooks/useApproveAppt";
import toast from "react-hot-toast";
import { DUMMY_APPOINTMENTS } from "../utils/DummyAppts";

function UpcomingAppointments() {
  const { isAllApptsLoading, allApptsError, allApptsData } = useAdminContext();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const { approveApptFunction, isLoading } = useApproveAppt();

  const handleSelectAppt = (appt) => {
    setSelectedAppointment(appt);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAppointment({});
    setModalOpen(false);
  };

  const handleApprove = async () => {
    const result = await approveApptFunction(selectedAppointment._id);

    console.log(result);

    if (result.success) {
      toast.success(result.data.message);
      setModalOpen(false);
    } else {
      toast.error(result.error);
    }
  };

  return (
    <>
      <div className="flex-1 flex flex-col shadow-sm rounded">
        <h1 className="font-semibold p-4 border-b border-gray-200">
          Upcoming Appointments
        </h1>
        <div className="flex-1 overflow-y-auto relative scrollbar-thin">
          <div className="absolute inset-0 p-4">
            {DUMMY_APPOINTMENTS.filter(
              (data) => data.status === "confirmed"
            ).map((data, index) => (
              <div
                key={index}
                onClick={() => handleSelectAppt(data)}
                className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                <p className="text-xs font-bold">{index + 1}</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                  <p className="text-xs text-gray-500">
                    {`${format(new Date(data.date), "EEEE, MMMM d")} - ${
                      data.time
                    }`}
                  </p>
                  <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full w-fit">
                    {data.selectedServices.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="absolute inset-0 p-4">
            {isAllApptsLoading ? (
              <>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 py-2 last:border-none flex flex-col gap-3 animate-pulse">
                    <div className="h-3 rounded-md bg-gray-100 w-[60%]"></div>
                    <div className="h-3 rounded-md bg-gray-100 w-[40%]"></div>
                    <div className="h-3 rounded-md bg-gray-100 w-[70%]"></div>
                  </div>
                ))}
              </>
            ) : allApptsError ? (
              <p className="text-red-500 text-sm">
                {allApptsError.response.data.message}
              </p>
            ) : (
              <>
                {allApptsData.pending.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectAppt(data)}
                    className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                    <p className="text-xs font-bold">{index + 1}</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                      <p className="text-xs text-gray-500">
                        {`${format(new Date(data.date), "EEEE, MMMM d")} - ${
                          data.time
                        }`}
                      </p>
                      <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full w-fit">
                        {data.selectedServices.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div> */}
        </div>
      </div>

      <ApptDescModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        appt={selectedAppointment}
        handleApprove={handleApprove}
        isLoading={isLoading}
      />
    </>
  );
}

export default UpcomingAppointments;
