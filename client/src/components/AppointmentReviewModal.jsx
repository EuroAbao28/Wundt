import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import React from "react";
import { format, parseISO } from "date-fns";
import useCreateNewAppt from "../hooks/useCreateNewAppt";
import toast from "react-hot-toast";

function AppointmentReviewModal({ isOpen, onClose, formData }) {
  const { createNewApptFunction, isLoading } = useCreateNewAppt();

  const handleConfirmSubmit = async () => {
    const result = await createNewApptFunction(formData);

    console.log(result);

    if (result.success) {
      // setFormData({
      //   firstname: "",
      //   lastname: "",
      //   phone: "",
      //   email: "",
      //   date: "",
      //   time: "",
      //   branch: "",
      //   selectedServices: [],
      //   comments: "",
      // });

      toast.success(result.data.message);

      onClose();
    } else {
      toast.error(result.error);
      onClose();
    }
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
          <DialogPanel className="bg-white font-poppins rounded-xl max-w-3xl w-full text-gray-900 p-4 md:py-6 md:px-8 shadow relative">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="font-semibold text-2xl">Review Details</h2>
              <p className="text-jungle">
                Confirm your details before submitting
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:gap-y-4 mt-10">
              <DataField label="Firstname" value={formData.firstname} />
              <DataField label="Lastname" value={formData.lastname} />
              <DataField label="Email" value={formData.email} colSpan={2} />
              <DataField label="Phone No." value={formData.phone} colSpan={2} />
              <DataField
                label="Date & Time"
                value={
                  formData?.date &&
                  formData?.time &&
                  format(
                    parseISO(`${formData.date}T${formData.time}`),
                    "MMMM d, yyyy - h:mm a"
                  )
                }
                colSpan={2}
              />

              <DataField label="Branch" value={formData.branch} colSpan={2} />

              <section className="flex flex-col gap-1 max-sm:col-span-2">
                <span className="uppercase text-xs font-semibold text-gray-500">
                  {`Selected Services (${formData.selectedServices.length})`}
                </span>
                <div className="outline outline-gray-200 rounded relative h-16 md:h-20 overflow-auto">
                  <div className="absolute top-0 left-0 right-0 flex flex-col gap-2 p-2">
                    {formData.selectedServices.map((item, index) => (
                      <p
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded text-xs md:text-sm shadow-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </section>

              <section className="flex flex-col gap-1 max-sm:col-span-2">
                <span className="uppercase text-xs font-semibold text-gray-500">
                  Special Requests / Notes
                </span>
                <div className="outline outline-gray-200 rounded px-3 py-2 max-sm:max-h-16 md:h-20 overflow-auto scrollbar-thin">
                  {formData.comments}
                </div>
              </section>
            </div>

            <div className="mt-6 md:mt-10 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="bg-gray-200 text-gray-600 rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center justify-center cursor-pointer">
                Cancel
              </button>

              <button
                onClick={handleConfirmSubmit}
                disabled={isLoading}
                className="bg-jungle text-white rounded py-2 px-8 font-semibold uppercase active:scale-95 transition-all text-sm max-sm:flex-1 flex gap-2 items-center justify-center cursor-pointer">
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}

const DataField = ({ label, value, colSpan = 1 }) => {
  return (
    <section className={`max-sm:col-span-${colSpan} flex flex-col gap-1`}>
      <span className="uppercase text-xxs md:text-xs font-semibold text-gray-500">
        {label}
      </span>
      <p className="px-3 py-2 outline outline-gray-200 rounded text-sm md:text-base">
        {value}
      </p>
    </section>
  );
};

export default AppointmentReviewModal;
