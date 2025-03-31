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
import axios from "axios";
import { URL_APPROVE_APPT } from "../../utils/APIRuotes";
import ApptDescModal from "../../components/ApptDescModal";
import ApppointmentRequests from "../../components/ApppointmentRequests";

function Dashboard() {
  const { isAllApptsLoading, allApptsError, allApptsData } = useAdminContext();

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
              Today's Appointment
            </h1>
            <div className="flex-1 overflow-y-auto relative scrollbar-thin">
              <div className="absolute inset-0 p-4">
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
                    {allApptsData.today.map((data, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectAppt(data)}
                        className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                        <p className="text-xs font-bold">{index + 1}</p>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                          <p className="text-xs text-gray-500">
                            {`${format(
                              new Date(data.date),
                              "EEEE, MMMM d"
                            )} - ${data.time}`}
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
              Upcoming Appointments
            </h1>
            <div className="flex-1 overflow-y-auto relative scrollbar-thin">
              <div className="absolute inset-0 p-4">
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
                    {allApptsData.upcoming.map((data, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectAppt(data)}
                        className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50 ">
                        <p className="text-xs font-bold">{index + 1}</p>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                          <p className="text-xs text-gray-500">
                            {`${format(
                              new Date(data.date),
                              "EEEE, MMMM d"
                            )} - ${data.time}`}
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

          <ApppointmentRequests />
        </div>
      </div>
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

export default Dashboard;
