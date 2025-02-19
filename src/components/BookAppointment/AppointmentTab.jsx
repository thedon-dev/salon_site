import React, { useCallback, useState } from "react";
import ServiceSelection from "./ServiceSelection";
import DateAndTime from "./DateAndTime";
import YourInformation from "./YourInformation";

const RequestSent = ({ restart }) => (
  <div className="flex flex-col items-center justify-center py-20">
    <h2 className="text-xl font-bold text-green-600">🎉 Request Sent!</h2>
    <p className="mt-2 text-gray-600 text-center">
      Your appointment request has been submitted successfully.
    </p>
    <button
      onClick={restart}
      className="mt-5 bg-black text-white px-5 py-2 rounded"
    >
      Book Another Appointment
    </button>
  </div>
);

const AppointmentTab = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [formCompleted, setFormCompleted] = useState([false, false, false]);
  const [requestSent, setRequestSent] = useState(false);
  //   const [completed, setCompleted] = useState(false);

  const buttons = [
    {
      name: "Service Selection",
      component: (
        <ServiceSelection onComplete={() => updateFormStatus(0, true)} />
      ),
    },
    {
      name: "Date & Time",
      component: <DateAndTime onComplete={() => updateFormStatus(1, true)} />,
    },
    {
      name: "Your Information",
      component: (
        <YourInformation onComplete={() => updateFormStatus(2, true)} />
      ),
    },
  ];

  function updateFormStatus(index, status) {
    setFormCompleted((prev) => {
      const updated = [...prev];
      updated[index] = status;
      return updated;
    });
  }

  const nextStep = () => {
    if (currentDisplay < buttons.length - 1) {
      setCurrentDisplay(currentDisplay + 1);
    } else {
      setRequestSent(true);
    }
  };

  const prevStep = () => {
    if (currentDisplay > 0) {
      setCurrentDisplay(currentDisplay - 1);
    }
  };

  const restartBooking = () => {
    setCurrentDisplay(0);
    setFormCompleted([false, false, false]);
    setRequestSent(false);
  };

  return (
    <div className="rounded-lg shadow-lg flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/5 rounded-t-lg lg:rounded-lg bg-[#FDE4DB] py-10 pb-0 lg:pb-10 lg:py-20 flex items-end lg:items-center justify-start flex-row lg:flex-col px-2 lg:gap-7">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => index <= currentDisplay && setCurrentDisplay(index)}
            className={`${
              index === currentDisplay
                ? "bg-white lg:bg-black text-black lg:text-white"
                : index <= currentDisplay
                ? "lg:bg-[#DEB3A4] text-black hover:bg-[#ab8577]"
                : "lg:bg-gray-300 text-gray-500 cursor-not-allowed"
            } rounded-t lg:rounded mt-auto py-3 px-3 lg:px-7 w-1/2 text-nowrap text-xs lg:text-base`}
            disabled={index > currentDisplay}
          >
            {btn.name}
          </button>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative lg:w-3/5 px-[5%] py-10">
        {requestSent ? (
          <RequestSent restart={restartBooking} />
        ) : (
          <>{buttons[currentDisplay].component} </>
        )}

        {/* Navigation Buttons */}
        {!requestSent ? (
          <div className="bottom-5 w-full border-t-2 flex gap-3 mt-5 justify-end">
            {currentDisplay > 0 && (
              <button
                onClick={prevStep}
                className="mt-5 bg-black text-white rounded px-5 py-2"
              >
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={!formCompleted[currentDisplay]}
              className={`mt-5 rounded px-5 py-2 ${
                formCompleted[currentDisplay]
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentDisplay === buttons.length - 1
                ? "Submit Request"
                : "Continue"}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AppointmentTab;
