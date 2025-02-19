import React, { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import { DateAndTime } from "./DateAndTime";
import YourInformation from "./YourInformation";

const AppointmentTab = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const buttons = [
    {
      name: "Service Selection",
      component: <ServiceSelection />,
    },
    {
      name: "Date & Time",
      component: <DateAndTime />,
    },
    {
      name: "Your Information",
      component: <YourInformation />,
    },
  ];

  const setDisplay = (index) => {
    setCurrentDisplay(index);
  };
  return (
    <div className="rounded-lg shadow-lg flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/5 rounded-t-lg lg:rounded-lg bg-[#FDE4DB] py-10 pb-0 lg:pb-10 lg:py-20 flex items-end lg:items-center justify-start flex-row lg:flex-col px-2 lg:gap-7">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => setDisplay(index)}
            className={`${
              index === currentDisplay
                ? "bg-white lg:bg-black text-black lg:text-white"
                : "lg:bg-[#DEB3A4] text-black hover:bg-[#ab8577]"
            } rounded-t lg:rounded mt-auto py-3 px-3 lg:px-7 w-1/2 text-nowrap cursor-pointer text-xs lg:text-base`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="relative lg:w-3/5 px-[5%] py-10">
        {buttons[currentDisplay].component}
        <div className="bottom-5 w-full border-t-2 flex gap-3 mt-5 justify-end">
          {currentDisplay > 0 && (
            <button className="mt-5 bg-black text-white rounded px-5 py-2">
              Back
            </button>
          )}
          <button className="mt-5 bg-black text-white rounded px-5 py-2">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTab;
