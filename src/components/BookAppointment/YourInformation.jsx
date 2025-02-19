import React, { useState, useEffect } from "react";

const YourInformation = ({ onComplete }) => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
  });
  const [allDataFilled, setAllDataFilled] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const allFilled = Object.values(data).every((value) => value.trim() !== "");
    if (allFilled) {
      setAllDataFilled(true);
    }
  }, [data]);

  useEffect(() => {
    if (allDataFilled) {
      onComplete();
    }
  }, [allDataFilled]);

  return (
    <div>
      <h3 className="font-semibold">
        Your Information <span className="text-red-700">*</span>
      </h3>
      <div className="mt-5 flex flex-col gap-5">
        <input
          type="text"
          name="Name"
          value={data.Name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border rounded p-3"
        />
        <input
          type="email"
          name="Email"
          value={data.Email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border rounded p-3"
        />
        <input
          type="tel"
          name="PhoneNumber"
          value={data.PhoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border rounded p-3"
        />
      </div>
    </div>
  );
};

export default YourInformation;
