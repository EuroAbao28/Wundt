import classNames from "classnames";
import { format } from "date-fns";
import React from "react";

function ApptDescModal({
  isModalOpen,
  handleCloseModal,
  appt,
  handleApprove,
  isLoading,
}) {
  return (
    <dialog
      className={classNames("modal p-6 ", {
        "modal-open": isModalOpen,
      })}>
      <div className="modal-box bg-white rounded max-w-2xl w-full p-0">
        <div className="p-6 flex justify-between items-center border-b border-gray-200 relative">
          <h1 className="font-semibold ">Appointment Details</h1>

          <div className="flex gap-2 items-center">
            <p
              className={classNames(
                "px-4 py-2  rounded uppercase font-semibold text-sm",
                {
                  "bg-orange-100 text-orange-500": appt?.status === "pending",
                  "bg-blue-100 text-blue-500": appt?.status === "comfirmed",
                  "bg-emerald-100 text-emerald-500":
                    appt?.status === "completed",
                  "bg-red-100 text-red-500": appt?.status === "canceled",
                }
              )}>
              Pending
            </p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
          <DataField label={"firstname"} data={appt?.firstname} />
          <DataField label={"lastname"} data={appt?.lastname} />
          <DataField label={"phone no."} data={appt?.phone} />
          <DataField label={"email"} data={appt?.email} />
          <DataField label={"date"} data={appt?.date} />
          <DataField label={"time"} data={appt?.time} />

          <section className="flex flex-col gap-2 col-span-2">
            <span className="uppercase text-xs font-semibold">
              Selected Services
            </span>
            <div className="flex gap-1 sm:gap-2 flex-wrap max-h-32 overflow-y-auto">
              {appt?.selectedServices?.map((service, index) => (
                <p
                  key={index}
                  className="text-sm bg-emerald-600/10 text-emerald-600 px-4 py-2 rounded-full w-fit">
                  {service}
                </p>
              ))}
            </div>
          </section>

          <section className="flex flex-col  gap-y-2 col-span-2">
            <p className="uppercase font-semibold text-xs text-nowrap">
              Comments / Notes :
            </p>
            <p className="outline outline-gray-300 p-2 rounded flex-1 max-h-24 overflow-y-auto text-sm scrollbar-thin">
              {appt?.comments}
            </p>
          </section>
        </div>

        <div className="flex gap-4 justify-center p-6">
          <button
            onClick={handleCloseModal}
            className="bg-radial-[at_-50%_-50%] from-gray-400 to-gray-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer mr-auto">
            Close
          </button>

          <button className="bg-radial-[at_-50%_-50%] from-red-500 to-rose-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
            Decline
          </button>

          <button
            onClick={handleApprove}
            className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center cursor-pointer">
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-xs"></span>
                Approving
              </>
            ) : (
              "Approve"
            )}
          </button>
        </div>
      </div>
    </dialog>
  );
}

const DataField = ({ label, data }) => {
  return (
    <section className="flex flex-col gap-2">
      <span className="uppercase text-xs font-semibold">{label}</span>
      <p
        className={classNames("outline outline-gray-300 py-2 px-4 rounded ", {
          capitalize: label !== "email",
        })}>
        {label === "date"
          ? data && format(new Date(data), "EEEE, MMMM d")
          : data}
      </p>
    </section>
  );
};

export default ApptDescModal;
