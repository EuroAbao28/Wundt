import {
  TbLayoutGrid,
  TbChartBar,
  TbCalendarCheck,
  TbClockPause,
  TbCalendarCancel,
} from "react-icons/tb";

const appointments = [
  {
    firstname: "John",
    lastname: "Doe",
    phone: "0917-123-4567",
    email: "johndoe@gmail.com",
    date: "2025-03-26",
    time: "9:00 AM",
    selectedServices: ["Cognitive Therapy"],
    comments: "Feeling stressed at work.",
    status: "pending",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    phone: "0928-987-6543",
    email: "janesmith@yahoo.com",
    date: "2025-03-26",
    time: "10:30 AM",
    selectedServices: ["Behavioral Therapy"],
    comments: "Having trouble sleeping.",
    status: "confirmed",
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    phone: "0998-765-4321",
    email: "michaelj@gmail.com",
    date: "2025-03-26",
    time: "1:00 PM",
    selectedServices: ["Depression Counseling"],
    comments: "Feeling down for a few weeks.",
    status: "completed",
  },
  {
    firstname: "Emily",
    lastname: "Brown",
    phone: "0915-234-5678",
    email: "emilybrown@outlook.com",
    date: "2025-03-27",
    time: "3:00 PM",
    selectedServices: ["Couples Therapy"],
    comments: "Relationship struggles.",
    status: "canceled",
  },
  {
    firstname: "David",
    lastname: "Wilson",
    phone: "0921-456-7890",
    email: "davidwilson@live.com",
    date: "2025-03-27",
    time: "5:00 PM",
    selectedServices: ["Anger Management"],
    comments: "Difficulty controlling emotions.",
    status: "pending",
  },
  {
    firstname: "Sophia",
    lastname: "Martinez",
    phone: "0973-789-1234",
    email: "sophia.m@gmail.com",
    date: "2025-03-27",
    time: "6:30 PM",
    selectedServices: ["Stress Management"],
    comments: "Overwhelmed with school.",
    status: "confirmed",
  },
  {
    firstname: "Daniel",
    lastname: "Anderson",
    phone: "0908-321-6547",
    email: "daniel.a@hotmail.com",
    date: "2025-03-28",
    time: "8:00 PM",
    selectedServices: ["Self-Esteem Coaching"],
    comments: "Struggling with confidence.",
    status: "completed",
  },
  {
    firstname: "Olivia",
    lastname: "Taylor",
    phone: "0916-654-0987",
    email: "olivia.t@gmail.com",
    date: "2025-03-28",
    time: "9:30 AM",
    selectedServices: ["Grief Counseling"],
    comments: "Lost a family member recently.",
    status: "pending",
  },
  {
    firstname: "Liam",
    lastname: "White",
    phone: "0933-214-5678",
    email: "liam.white@gmail.com",
    date: "2025-03-28",
    time: "11:00 AM",
    selectedServices: ["Therapy Session"],
    comments: "Anxiety about public speaking.",
    status: "canceled",
  },
  {
    firstname: "Ava",
    lastname: "Harris",
    phone: "0977-111-2222",
    email: "avaharris@outlook.com",
    date: "2025-03-29",
    time: "1:30 PM",
    selectedServices: ["Family Therapy"],
    comments: "Family communication issues.",
    status: "confirmed",
  },
  {
    firstname: "Noah",
    lastname: "Clark",
    phone: "0925-333-4444",
    email: "noahclark@gmail.com",
    date: "2025-03-29",
    time: "3:00 PM",
    selectedServices: ["Trauma Counseling"],
    comments: "Experienced a traumatic event.",
    status: "pending",
  },
];

function DashboardDummy() {
  return (
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
        <div className="flex-1  flex flex-col shadow-sm rounded ">
          <h1 className="font-semibold p-4 border-b border-gray-200">
            Today's Appointments
          </h1>
          <div className="flex-1   overflow-y-auto relative scrollbar-thin">
            <div className="absolute inset-0 p-4">
              {appointments
                .filter(
                  (appointment) =>
                    new Date(appointment.date).toISOString().split("T")[0] ===
                    new Date(new Date().setHours(new Date().getHours() + 8))
                      .toISOString()
                      .split("T")[0]
                )
                .map((appointment, index) => {
                  const appointmentDate = new Date(appointment.date);
                  const formattedDate = appointmentDate.toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    }
                  );

                  return (
                    <div
                      key={index}
                      className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center">
                      <p className="text-xs font-bold">{index + 1}</p>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">{`${appointment.firstname} ${appointment.lastname}`}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                        <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full">
                          {appointment.selectedServices.join(", ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col shadow-sm rounded">
          <h1 className="font-semibold p-4 border-b border-gray-200">
            Upcoming Appointments
          </h1>
          <div className="flex-1 overflow-y-auto relative scrollbar-thin">
            <div className="absolute inset-0 p-4">
              {appointments
                .filter((appointment) => {
                  const appointmentDate = new Date(appointment.date);
                  const today = new Date();

                  // Convert to local date only (ignore time)
                  const appointmentDateOnly = new Date(
                    appointmentDate.getFullYear(),
                    appointmentDate.getMonth(),
                    appointmentDate.getDate()
                  );
                  const todayOnly = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate()
                  );

                  return appointmentDateOnly > todayOnly; // Excludes today
                })
                .map((appointment, index) => {
                  const appointmentDate = new Date(appointment.date);
                  const formattedDate = appointmentDate.toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    }
                  );

                  return (
                    <div
                      key={index}
                      className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center">
                      <p className="text-xs font-bold">{index + 1}</p>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">{`${appointment.firstname} ${appointment.lastname}`}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                        <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full">
                          {appointment.selectedServices.join(", ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col shadow-sm rounded">
          <h1 className="font-semibold p-4 border-b border-gray-200">
            Appointment Requests
          </h1>
          <div className="flex-1 overflow-y-auto relative scrollbar-thin">
            <div className="absolute inset-0 p-4">
              {appointments
                .filter(
                  (appointment) =>
                    appointment.status === "pending" && // Only pending appointments
                    new Date(appointment.date).toISOString().split("T")[0] ===
                      new Date(new Date().setHours(new Date().getHours() + 8))
                        .toISOString()
                        .split("T")[0]
                )
                .map((appointment, index) => {
                  const appointmentDate = new Date(appointment.date);
                  const formattedDate = appointmentDate.toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    }
                  );

                  return (
                    <div
                      key={index}
                      className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center">
                      <p className="text-xs font-bold">{index + 1}</p>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">{`${appointment.firstname} ${appointment.lastname}`}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                        <p className="text-xxs bg-emerald-600/10 text-emerald-600 px-2 rounded-full">
                          {appointment.selectedServices.join(", ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default DashboardDummy;
