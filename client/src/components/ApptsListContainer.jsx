import { format, parseISO } from "date-fns";

const ApptsListContainer = ({
  title,
  appointments,
  handleSelectAppt,
  isLoading,
  error,
}) => {
  return (
    <div className="flex-1 flex flex-col shadow-sm rounded ">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h1 className="font-semibold ">{title}</h1>
        <p className="w-8 aspect-square rounded flex items-center justify-center bg-gray-50 outline outline-gray-300 font-semibold text-sm">
          {appointments?.length}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto relative scrollbar-thin">
        <div className="absolute inset-0 p-4">
          {isLoading ? (
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
          ) : error ? (
            // Error Message
            <p className="text-red-500 text-sm">
              {error.response?.data?.message || "Failed to load appointments"}
            </p>
          ) : appointments?.length === 0 ? (
            // No Appointments
            <p className="text-gray-500 text-sm">No appointments found.</p>
          ) : (
            // Render Appointments
            appointments?.map((data, index) => (
              <div
                key={index}
                onClick={() => handleSelectAppt(data)}
                className="border-b border-gray-200 py-2 last:border-none flex gap-6 items-center cursor-pointer hover:bg-gray-50">
                <p className="text-xs font-bold">{index + 1}</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{`${data.firstname} ${data.lastname}`}</p>
                  <p className="text-xs text-gray-500">
                    {format(parseISO(data.dateTime), "MMM d - h:mm a")}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {data.selectedServices.map((data, index) => (
                      <p
                        key={index}
                        className="text-xxs text-jungle bg-jungle/5 px-2 rounded-full w-fit">
                        {data}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ApptsListContainer;
