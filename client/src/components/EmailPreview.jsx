import React from "react";

const EmailPreview = () => {
  // Dummy data
  const appointment = {
    firstname: "John",
    email: "john@example.com",
    date: new Date(),
    time: "10:00 AM",
    branch: "Dagupan City Branch",
  };
  const additionalNote =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum      fugiat aspernatur deserunt animi ipsam temporibus iste tenetur    adipisci repudiandae veritatis?";
  const LOGO_URL =
    "https://res.cloudinary.com/dh2rqtgfz/image/upload/v1746299946/Wundt/assets/xwzbguukskrt0zdievrh.png";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm w-full">
        {/* logo */}
        <div className="bg-gray-50 p-4">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-16 rounded-full border-4 border-white mx-auto"
          />
        </div>

        {/* body */}
        <div className="p-8">
          <header className="text-center">
            <h1 className="text-2xl font-semibold">Appointment Confirmed</h1>
            <p className="text-gray-600 mt-2">
              Thank you for choosing our services
            </p>
          </header>

          <p className="mt-10">Dear Euro,</p>

          <p
            className="mt-4
          ">
            Your appointment has been successfully scheduled. Here are the
            details:
          </p>

          <div className="flex flex-col gap-2 mt-6 bg-jungle/10 border-l-4  border-jungle px-4 py-6 rounded-lg">
            <section className="flex gap-2">
              <p className="font-semibold">Date:</p>
              <p>{appointment.date.toDateString()}</p>
            </section>

            <section className="flex gap-2">
              <p className="font-semibold">Time:</p>
              <p>{appointment.time}</p>
            </section>

            <section className="flex gap-2">
              <p className="font-semibold">Location:</p>
              <p>{appointment.branch}</p>
            </section>
          </div>

          <div className="flex flex-col gap-2 mt-4 bg-therapy-blue/10 border-l-4  border-therapy-blue px-4 py-6 rounded-lg min-h-32">
            <p className="font-semibold">Additional Notes:</p>
            <p>{additionalNote}</p>
          </div>

          <p className="mt-6">
            If you need to reschedule or have any questions, please reply to
            this email.
          </p>

          <div className="border-t border-gray-200 mt-10 pt-10">
            <p>Best regards,</p>
            <p className="font-semibold">The Wundt Psychological Institute </p>

            <p className="mt-6 text-therapy-blue">Visit our website</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
