import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAppointmentContext } from "../contexts/AppointmentContext";
import useUpdateStatusAppt from "../hooks/useUpdateStatusAppt";
import toast from "react-hot-toast";

function AppointmentConfirmationModal({ isOpen, type }) {
  const {
    selectedAppointment,
    handleCloseApproveModal,
    handleCloseBothModal,
    setSelectedAppointment,
    confirmationModalType,
  } = useAppointmentContext();

  const {
    approveApptFunction,
    isApproveLoading,
    isDeclineLoading,
    isCancelLoading,
    isCompleteLoading,
  } = useUpdateStatusAppt();

  const [additionalNote, setAdditionalNote] = useState("");

  const handleUpdateStatus = async () => {
    if (!confirmationModalType || !selectedAppointment) return;

    console.log(selectedAppointment);
    console.log(additionalNote);

    const result = await approveApptFunction(
      selectedAppointment._id,
      confirmationModalType,
      additionalNote
    );

    if (result.success) {
      toast.success(result.data.message);
      setSelectedAppointment(null); // clear selected appt
      handleCloseBothModal(); // close details and approveal modal
    } else {
      toast.error(result.error);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseApproveModal}
      className="relative z-50">
      {/* Backdrop */}
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      </TransitionChild>

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-8">
          <DialogPanel className="bg-white font-poppins rounded-2xl max-w-2xl w-full text-gray-900 p-6 shadow relative">
            {/* close button */}
            <div
              onClick={handleCloseApproveModal}
              className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full text-2xl text-gray-600 cursor-pointer transition-all">
              <IoClose />
            </div>

            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">
                {confirmationModalType === "approved" &&
                  "Approving Appointment"}
                {confirmationModalType === "declined" &&
                  "Declining Appointment"}
                {confirmationModalType === "canceled" &&
                  "Canceling Appointment"}
                {confirmationModalType === "completed" &&
                  "Completing Appointment"}{" "}
              </h2>
            </div>

            <div className="mt-10 ">
              <label className="flex flex-col gap-1 col-span-2">
                <p className="uppercase text-xs font-semibold text-gray-500">
                  Additional Note
                  <span className="text-jungle ml-2">(Optional)</span>
                </p>
                <textarea
                  name="note"
                  placeholder="Write a message..."
                  value={additionalNote}
                  onChange={(e) => setAdditionalNote(e.target.value)}
                  rows={3}
                  className="outline outline-gray-200 rounded w-full p-4 focus:outline-gray-400 max-h-48"
                />
              </label>
            </div>

            {confirmationModalType === "approved" && (
              <button
                onClick={handleUpdateStatus}
                disabled={isApproveLoading}
                className="mt-10 bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                {isApproveLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Approving
                  </>
                ) : (
                  "Approve"
                )}
              </button>
            )}

            {confirmationModalType === "canceled" && (
              <button
                onClick={handleUpdateStatus}
                disabled={isCancelLoading}
                className="mt-10 bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                {isCancelLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Cancelling
                  </>
                ) : (
                  "Cancel"
                )}
              </button>
            )}

            {confirmationModalType === "declined" && (
              <button
                onClick={handleUpdateStatus}
                disabled={isDeclineLoading}
                className="mt-10 bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                {isDeclineLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Declining
                  </>
                ) : (
                  "Decline"
                )}
              </button>
            )}

            {confirmationModalType === "completed" && (
              <button
                onClick={handleUpdateStatus}
                disabled={isCompleteLoading}
                className="mt-10 bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                {isCompleteLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Completing
                  </>
                ) : (
                  "Complete"
                )}
              </button>
            )}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}

export default AppointmentConfirmationModal;
