import {
  TbLayoutGrid,
  TbChartBar,
  TbCalendarCheck,
  TbClockPause,
  TbCalendarCancel,
} from "react-icons/tb";
import { useAdminContext } from "../../contexts/AdminContext";
import { format } from "date-fns";
import { useState } from "react";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";

function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const {
    appointmentsData,
    isAppointmentsLoading,
    isAppointmentsError,
    appointmentsError,
  } = useAdminContext();

  const handleSelectAppt = (appt) => {
    setSelectedAppointment(appt);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAppointment({});
    setModalOpen(false);
  };

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex gap-4">
          <SummaryCard
            icon={<TbChartBar />}
            title={"Total Appointments"}
            count={"124"}
          />

          <SummaryCard
            icon={<TbCalendarCheck />}
            title={"Completed Sessions"}
            count={"36"}
          />

          <SummaryCard
            icon={<TbClockPause />}
            title={"Pending Requests"}
            count={"17"}
          />

          <SummaryCard
            icon={<TbCalendarCancel />}
            title={"Canceled Appointments"}
            count={"26"}
          />
        </div>

        <div className="mt-6 flex-1 flex gap-4">
          <div className="flex-1 flex flex-col shadow-sm rounded">
            <h1 className="font-semibold p-4 border-b border-gray-200">
              Appointment Requests
            </h1>
            <div className="flex-1 overflow-y-auto relative scrollbar-thin">
              <div className="absolute inset-0 p-4">
                {isAppointmentsLoading ? (
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
                ) : isAppointmentsError ? (
                  <p className="text-red-500 text-sm">
                    {appointmentsError.response.data.message}
                  </p>
                ) : (
                  <>
                    {appointmentsData
                      .filter((data) => data.status === "pending")
                      .map((data, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelectAppt(data)}
                          className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                          <p className="text-xs font-bold">{index + 1}</p>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                            <p className="text-xs text-gray-500">
                              {format(new Date(data.date), "EEEE, MMMM d")}
                            </p>
                            <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full w-fit">
                              {data.selectedServices.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col shadow-sm rounded">
            <h1 className="font-semibold p-4 border-b border-gray-200">
              Appointment Requests
            </h1>
            <div className="flex-1 overflow-y-auto relative scrollbar-thin">
              <div className="absolute inset-0 p-4">
                {isAppointmentsLoading ? (
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
                ) : isAppointmentsError ? (
                  <p className="text-red-500 text-sm">
                    {appointmentsError.response.data.message}
                  </p>
                ) : (
                  <>
                    {appointmentsData
                      .filter((data) => data.status === "pending")
                      .map((data, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelectAppt(data)}
                          className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                          <p className="text-xs font-bold">{index + 1}</p>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                            <p className="text-xs text-gray-500">
                              {format(new Date(data.date), "EEEE, MMMM d")}
                            </p>
                            <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full w-fit">
                              {data.selectedServices.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col shadow-sm rounded">
            <h1 className="font-semibold p-4 border-b border-gray-200">
              Appointment Requests
            </h1>
            <div className="flex-1 overflow-y-auto relative scrollbar-thin">
              <div className="absolute inset-0 p-4">
                {isAppointmentsLoading ? (
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
                ) : isAppointmentsError ? (
                  <p className="text-red-500 text-sm">
                    {appointmentsError.response.data.message}
                  </p>
                ) : (
                  <>
                    {appointmentsData
                      .filter((data) => data.status === "pending")
                      .map((data, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelectAppt(data)}
                          className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                          <p className="text-xs font-bold">{index + 1}</p>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                            <p className="text-xs text-gray-500">
                              {format(new Date(data.date), "EEEE, MMMM d")}
                            </p>
                            <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full w-fit">
                              {data.selectedServices.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApptDescModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        appt={selectedAppointment}
      />
    </>
  );
}

const SummaryCard = ({ icon, title, count }) => {
  return (
    <div className="flex items-center gap-4 rounded shadow-sm p-4 flex-1">
      <p className="text-4xl  text-emerald-600">{icon}</p>
      <div>
        <h3 className="text-sm">{title}</h3>
        <p className="font-bold text-xl">{count}</p>
      </div>
    </div>
  );
};

const ApptDescModal = ({ isModalOpen, handleCloseModal, appt }) => {
  return (
    <dialog
      className={classNames("modal p-6 ", {
        "modal-open": isModalOpen,
      })}>
      <div className="modal-box bg-white rounded max-w-2xl w-full p-0">
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h1 className="font-semibold ">Appointment Details</h1>

          <button
            onClick={handleCloseModal}
            className=" rounded-full p-1 cursor-pointer hover:bg-gray-50 text-gray-500 hover:text-gray-600">
            <IoClose className="text-2xl" />
          </button>
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
          <button className="bg-radial-[at_-50%_-50%] from-red-400 to-red-500 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
            Decline
          </button>
          <button className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 cursor-pointer">
            Approve
          </button>
        </div>
      </div>
    </dialog>
  );
};

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

export default Dashboard;
