const dummyAppointments = {
  pending: [{ id: 1, client: "John Doe", requestedTime: "March 21, 1:00 PM" }],
  today: [
    {
      id: 2,
      client: "Alice Green",
      counselor: "Dr. Smith",
      time: "10:00 AM",
      status: "Confirmed",
    },
  ],
  upcoming: [
    {
      id: 3,
      client: "Bob White",
      counselor: "Dr. Brown",
      time: "March 22, 3:00 PM",
      status: "Confirmed",
    },
  ],
  past: [
    {
      id: 4,
      client: "Charlie Black",
      counselor: "Dr. Wilson",
      time: "March 19, 2:00 PM",
      status: "Completed",
    },
  ],
};

const Appointments = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Pending Requests */}
      <AppointmentRequestsSection data={dummyAppointments.pending} />

      {/* Today's Appointments */}
      <AppointmentSection
        title="Today's Appointments"
        data={dummyAppointments.today}
      />

      {/* Upcoming Appointments */}
      <AppointmentSection
        title="Upcoming Appointments"
        data={dummyAppointments.upcoming}
      />

      {/* Past Appointments */}
      <AppointmentSection
        title="Past Appointments"
        data={dummyAppointments.past}
      />
    </div>
  );
};

const AppointmentRequestsSection = ({ data }) => (
  <div>
    <h2 className="text-lg font-semibold mb-3">Pending Appointment Requests</h2>
    <div className="bg-white p-4 rounded-lg shadow-md">
      {data.length > 0 ? (
        <ul className="divide-y">
          {data.map((req) => (
            <li key={req.id} className="py-2 flex justify-between">
              <span>
                {req.client} - {req.requestedTime}
              </span>
              <div>
                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                  Approve
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No pending requests.</p>
      )}
    </div>
  </div>
);

const AppointmentSection = ({ title, data }) => (
  <div>
    <h2 className="text-lg font-semibold mb-3">{title}</h2>
    <div className="bg-white p-4 rounded-lg shadow-md">
      {data.length > 0 ? (
        <ul className="divide-y">
          {data.map((appt) => (
            <li key={appt.id} className="py-2 flex justify-between">
              <span>
                {appt.client} - {appt.counselor} ({appt.time})
              </span>
              <span className="text-sm text-gray-500">{appt.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No appointments found.</p>
      )}
    </div>
  </div>
);

export default Appointments;
