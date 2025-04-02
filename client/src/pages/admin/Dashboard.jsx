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
import { DUMMY_APPOINTMENTS } from "../../utils/DummyAppts";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import TodaysAppointments from "../../components/TodaysAppointments";

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
          <TodaysAppointments />

          <UpcomingAppointments />

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
