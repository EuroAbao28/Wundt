import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { format, parseISO } from "date-fns";
import classNames from "classnames";
import { useAppointmentContext } from "../contexts/AppointmentContext";
import { IoClose } from "react-icons/io5";

function AppointmentDetailsModal({
  isOpen,
  onClose,
  appointment,
  isApproveLoading,
  isDeclineLoading,
  isCancelLoading,
  isCompleteLoading,
}) {
  const { handleOpenApproveModal, setConfirmationModalType } =
    useAppointmentContext();

  const handleSetAndOpenConfirmationModal = (type) => {
    setConfirmationModalType(type);
    handleOpenApproveModal();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
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
          <DialogPanel className="bg-white font-poppins rounded-2xl max-w-5xl w-full text-gray-900 p-6 shadow relative">
            {/* close button */}
            <div
              onClick={onClose}
              className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full text-2xl text-gray-600 cursor-pointer transition-all">
              <IoClose />
            </div>

            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">Appointment Details</h2>
            </div>

            <div className="mt-10 grid grid-cols-3 grid-rows-4 gap-x-6 gap-y-4">
              <DataField
                label="Name"
                value={`${appointment?.firstname} ${appointment?.lastname}`}
              />

              <DataField label="Phone No." value={appointment?.phone} />

              <DataField
                label="Selected Services"
                value={appointment?.selectedServices}
                isLarge={true}
              />

              <DataField label="Email" value={appointment?.email} />

              <DataField
                label="Date & Time"
                value={
                  appointment &&
                  format(
                    parseISO(appointment.dateTime),
                    "EEE, MMM d, yyyy - h:mm a"
                  )
                }
              />

              <DataField label="Status" value={appointment?.status} />

              <DataField label="Branch" value={appointment?.branch} />

              <DataField
                label="Comments / Notes"
                value={appointment?.comments}
                isLarge={true}
              />

              <DataField
                label="Approved By"
                value={appointment?.status === "approved" && "Elon Musk"}
              />

              <DataField
                label="Approved At"
                value={
                  appointment &&
                  appointment.status === "approved" &&
                  format(
                    new Date(appointment?.updatedAt),
                    "MMMM d, yyyy - h:mm a"
                  )
                }
              />
            </div>

            {(appointment?.status === "approved" ||
              appointment?.status === "pending") && (
              <div className="flex justify-start gap-4 mt-10 pt-10 border-t-2  border-dashed border-gray-200 ">
                {appointment?.status === "approved" && (
                  <>
                    <button
                      onClick={() =>
                        handleSetAndOpenConfirmationModal("canceled")
                      }
                      disabled={isCancelLoading}
                      className="bg-gray-200 text-gray-600 rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                      {isCancelLoading ? (
                        <>
                          <span className="loading loading-spinner loading-xs"></span>
                          Canceling
                        </>
                      ) : (
                        "Cancel"
                      )}
                    </button>

                    <button
                      onClick={() =>
                        handleSetAndOpenConfirmationModal("completed")
                      }
                      disabled={isCompleteLoading}
                      className="bg-therapy-blue text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                      {isCompleteLoading ? (
                        <>
                          <span className="loading loading-spinner loading-xs"></span>
                          Completing
                        </>
                      ) : (
                        "Complete"
                      )}
                    </button>
                  </>
                )}

                {appointment?.status === "pending" && (
                  <>
                    <button
                      onClick={() =>
                        handleSetAndOpenConfirmationModal("declined")
                      }
                      disabled={isDeclineLoading}
                      className="bg-gray-200 text-gray-600 rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                      {isDeclineLoading ? (
                        <>
                          <span className="loading loading-spinner loading-xs"></span>
                          Declining
                        </>
                      ) : (
                        "Decline"
                      )}
                    </button>

                    <button
                      onClick={() =>
                        handleSetAndOpenConfirmationModal("approved")
                      }
                      disabled={isApproveLoading}
                      className="bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                      {isApproveLoading ? (
                        <>
                          <span className="loading loading-spinner loading-xs"></span>
                          Approving
                        </>
                      ) : (
                        "Approve"
                      )}
                    </button>
                  </>
                )}
              </div>
            )}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}

const DataField = ({ isLarge = false, label, value }) => {
  return (
    <section
      className={classNames("flex flex-col gap-1", {
        "row-span-2": isLarge,
      })}>
      <span className="uppercase text-xs font-semibold text-gray-500">
        {label === "Selected Services" ? `${label} (${value.length})` : label}
      </span>
      {label === "Status" ? (
        <div className="outline outline-gray-200 px-3 py-2 rounded capitalize">
          <p
            className={classNames("px-2 w-fit rounded-full font-medium", {
              "text-therapy-blue bg-therapy-blue/10": value === "completed",
              "text-jungle bg-jungle/10": value === "approved",
              "text-orange-500 bg-orange-500/10": value === "pending",
              "text-red-500 bg-red-500/10": value === "canceled",
              "text-gray-500 bg-gray-500/10": value === "declined",
            })}>
            {value}
          </p>
        </div>
      ) : label === "Selected Services" ? (
        <div className="outline outline-gray-200  rounded capitalize h-full overflow-y-auto relative scrollbar-thin">
          <div className=" absolute flex flex-col gap-2 left-0 right-0 top-0 p-2">
            {value.map((service, index) => (
              <p
                key={index}
                className="px-3 py-1 bg-gray-100 rounded text-sm shadow-sm">
                {service}
              </p>
            ))}
          </div>
        </div>
      ) : label === "Comments / Notes" ? (
        <div className="outline outline-gray-200 rounded h-full overflow-y-auto relative scrollbar-thin">
          <p className="absolute text-sm px-3 py-2">{value}</p>
        </div>
      ) : (
        <p
          className={classNames(
            "outline outline-gray-200 px-3 py-2 rounded  overflow-x-auto scrollbar-none text-nowrap h-full",
            {
              capitalize: label !== "Email",
            }
          )}>
          {value}
        </p>
      )}
    </section>
  );
};

export default AppointmentDetailsModal;
