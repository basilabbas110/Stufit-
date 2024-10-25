import React, { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa'; 
import HealthCard from './HealthCard';
import Bloodp from './Bloodp';
import Datarep from './Datarep';
import Heart from './Heart'

const Hero = () => {
  const [notificationOn, setNotificationOn] = useState(false); 

  const handleBellClick = () => {
    setNotificationOn(!notificationOn);
    if (!notificationOn) {
      alert('Notification is ON');
    }
  };

  return (
    <div className="w-full min-h-screen h-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600">

      <div className="flex items-center justify-between px-4 sm:px-7 pt-5">
        <div>
          <h1 className="text-gray-100 font-poppins font-bold text-lg sm:text-xl lg:text-2xl">
            Health Overview
          </h1>
          <p className="text-gray-100 font-poppins text-xs sm:text-sm lg:text-base">
            Oct 23, 2024
          </p>
        </div>
        <div className="flex items-center space-x-3">
   
          <div className="flex items-center bg-gray-200 rounded px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray-800 outline-none w-full px-2"
            />
            <button className="text-gray-500 hover:text-gray-700">
              <FaSearch />
            </button>
          </div>
          <FaBell
            className={`cursor-pointer ${notificationOn ? 'text-yellow-400' : 'text-gray-100'} hover:text-gray-300`}
            onClick={handleBellClick}
          />
        </div>
      </div>

  
      <div className="px-3 flex flex-wrap items-stretch justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <HealthCard />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Bloodp />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <Heart/>
        </div>
      </div>


      <div className="w-full mt-6 flex justify-center items-center">
        <Datarep />
      </div>
    </div>
  );
};

export default Hero;
