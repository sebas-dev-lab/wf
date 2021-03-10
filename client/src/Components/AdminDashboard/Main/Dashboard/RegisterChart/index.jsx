import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Register User",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [10, 5, 8, 12, 5, 2, 1, 11, 22, 2, 8, 7],
    },
  ],
};

const RegisterChart = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2>Number of register user by month</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

export default RegisterChart;
