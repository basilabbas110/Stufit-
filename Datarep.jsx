import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Datarep = () => {
  const options = {
    xaxis: {
      categories: ['19 Oct', '20 Oct', '21 Oct', '22 Oct', '23 Oct', '24 Oct', '25 Oct'],
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-poppins fill-white',
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-poppins fill-white',
        },
        formatter: (value) => value + ' mins',
      },
    },
    series: [
      {
        name: 'Meditation',
        data: [15, 14, 5, 12, 15, 25],
        color: '#dbb81a',
      },
      {
        name: 'Yoga',
        data: [10, 13, 15, 30, 17, 45],
        color: '#4ddb1a',
      },
    ],
    chart: {
      type: 'area',
      height: '100%',
      width: '100%',
      dropShadow: { enabled: false },
      toolbar: { show: false },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    stroke: { width: 6 },
    dataLabels: { enabled: false },
    grid: { show: false },
    legend: { show: false },
    tooltip: { enabled: true },
  };

  return (
    <div className="w-full h-full bg-transparent rounded-lg shadow-md">
      <div className="flex justify-between p-4 md:p-6 pb-0">
        <div>
          <h5 className="leading-none text-3xl font-bold text-white pb-2 font-poppins">Activity Growth</h5>
       
          <p className="text-base font-normal text-white font-poppins">this week</p>
          
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-white text-center ">
          23%
          <svg className="w-3 h-3 ms-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>
      <div id="labels-chart" className="px-2.5">
        <ReactApexChart options={options} series={options.series} type="area" height={250} />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between mt-5 p-4 md:p-6 pt-0">
        <div className="flex justify-between items-center pt-5">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-white hover:text-yellow-500 text-center inline-flex items-center"
            type="button"
          >
            Last 7 days
            <svg className="w-2.5 m-2.5 ms-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <hr></hr>
         
        </div>
      </div>
    </div>
  );
};

export default Datarep;
