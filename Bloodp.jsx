import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import bloodBagIcon from "../assets/glucose.gif";
import './apex';

const Bloodp = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(251, 146, 60, 0.6)");
    gradient.addColorStop(1, "rgba(251, 146, 60, 0)");

    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    chartRef.current.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["19 Oct", "20 Oct", "21 Oct", "22 Oct", "23 Oct", "24 Oct", "25 Oct"],
        datasets: [
          {
            data: [82, 82, 78, 81, 74, 85, 80],
            borderColor: "#2A4364",
            backgroundColor: gradient,
            borderWidth: 2,
            fill: false,
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 mx-5 my-5 bg-gradient-to-bl from-white to-yellow-100 border-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-48 text-center font-poppins">
      <div className="flex flex-row items-center justify-center">
        <img
          src={bloodBagIcon}
          alt="Blood Bag Icon"
          className="w-15 h-20 transform transition-transform duration-300 hover:scale-110"
        />
        <p className="pl-3 text-lg font-semibold text-blue-900">Blood Sugar</p>
      </div>
      <hr />
      <p className="text-3xl font-bold text-blue-900 mt-2">
        80 <span className="text-sm text-blue-800">mg/dL</span>
      </p>
      <p className="text-lg text-green-700 text-right text-[14px] mt-1">Normal</p>
      <div className="mt-4">
        <canvas ref={chartRef} className="w-full h-16"></canvas>
      </div>
    </div>
  );
};

export default Bloodp;
