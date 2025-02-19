import React, { useEffect } from "react";

const DateAndTime = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, []);

  return <div>DateAndTime</div>;
};

export default DateAndTime;
