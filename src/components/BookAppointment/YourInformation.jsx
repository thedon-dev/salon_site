import React, { useState } from "react";

const YourInformation = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
  });
  return (
    <div>
      <h3 className="font-semibold">
        Your Information <span className="text-red-700">*</span>
      </h3>
      <div className="mt-5 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded p-3"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="w-full border rounded p-3"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded p-3"
        />
      </div>
    </div>
  );
};

export default YourInformation;
