import { format, parse } from "date-fns";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import classNames from "classnames";

const AppointmentModal = ({
  isModalOpen,
  appointment,
  handleCloseModal,
  handleUpdateStatus,
  isApproveLoading,
  isDeclineLoading,
  isCancelLoading,
}) => {
  if (!appointment) return null;

  return (
    <Dialog
      open={isModalOpen}
      as="div"
      onClose={handleCloseModal}
      className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="bg-white font-poppins rounded-lg max-w-2xl w-full text-gray-600 p-6 shadow">
          <div className="flex justify-between items-center pb-6">
            <h2 className="font-semibold text-lg">Appointment Details</h2>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">Name</span>
              <p className="border-b border-gray-300 capitalize">{`${appointment.firstname} ${appointment.lastname}`}</p>
            </section>

            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">Phone</span>
              <p className="border-b border-gray-300">{appointment.phone}</p>
            </section>

            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">Email</span>
              <p className="border-b border-gray-300">{appointment.email}</p>
            </section>

            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">
                Date & Time
              </span>
              <p className="border-b border-gray-300">
                {format(new Date(appointment.date), "MMMM d, yyyy")} -{" "}
                {format(
                  parse(
                    appointment.time.replace(/(AM|PM)/gi, "").trim(),
                    "HH:mm",
                    new Date()
                  ),
                  "h:mm a"
                )}
              </p>
            </section>

            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">
                Selected Services
              </span>
              <p className="border-b border-gray-300 capitalize">
                {appointment.selectedServices.join(", ")}
              </p>
            </section>

            <section className="flex flex-col">
              <span className="uppercase text-xs font-semibold">Status </span>
              <p
                className={classNames(
                  "border-b border-gray-300 capitalize font-semibold",
                  {
                    "text-emerald-600": appointment.status === "completed",
                    "text-blue-600": appointment.status === "approved",
                    "text-orange-500": appointment.status === "pending",
                    "text-red-600": appointment.status === "canceled",
                  }
                )}>
                {appointment.status}
              </p>
            </section>

            <section className="flex flex-col gap-y-2 col-span-2">
              <p className="uppercase font-semibold text-xs text-nowrap">
                Comments / Notes
              </p>
              <p className="outline outline-gray-300 p-2 rounded flex-1 max-h-24 overflow-y-auto text-sm scrollbar-thin">
                {appointment?.comments}
              </p>
            </section>

            {appointment.status === "approved" && (
              <>
                <section className="flex flex-col">
                  <span className="uppercase text-xs font-semibold">
                    Approved By
                  </span>
                  <p className="border-b border-gray-300 capitalize">
                    Elon Musk
                  </p>
                </section>

                <section className="flex flex-col">
                  <span className="uppercase text-xs font-semibold">
                    Approved On
                  </span>
                  <p className="border-b border-gray-300 capitalize">
                    {format(
                      new Date(appointment.updatedAt),
                      "MMMM d, yyyy - h:mm a"
                    )}
                  </p>
                </section>
              </>
            )}
          </div>

          <div className="flex gap-4 justify-center mt-10">
            <button
              onClick={handleCloseModal}
              className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer mr-auto">
              Close
            </button>

            {appointment.status === "approved" && (
              <>
                <button
                  onClick={() => handleUpdateStatus("canceled")}
                  disabled={isCancelLoading}
                  className="bg-radial-[at_-50%_-50%] from-red-500 to-rose-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
                  {isCancelLoading ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Canceling
                    </>
                  ) : (
                    "Cancel Appointment"
                  )}
                </button>
              </>
            )}

            {appointment.status === "pending" && (
              <>
                <button
                  onClick={() => handleUpdateStatus("declined")}
                  disabled={isDeclineLoading}
                  className="bg-radial-[at_-50%_-50%] from-red-500 to-rose-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
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
                  onClick={() => handleUpdateStatus("approved")}
                  disabled={isApproveLoading}
                  className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
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
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AppointmentModal;
