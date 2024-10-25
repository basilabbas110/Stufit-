import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/logo1.png';
import {
  faHome,
  faInbox,
  faCalendar,
  faChartLine,
  faCogs,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ open, setOpen }) => {
  const Menus = [
    { title: "Home", icon: faHome },
    { title: "Inbox", icon: faInbox },
    { title: "Schedule", icon: faCalendar },
    { title: "Analytics", icon: faChartLine },
    { title: "Settings", icon: faCogs },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-40" : "w-20"
        } bg-gradient-to-r from-gray-200 to-white border-blue-500 h-screen p-5 pt-15 relative duration-300 shadow-lg md:sticky md:top-0 md:z-50 hidden md:block`}
        style={{ position: 'sticky', top: '0', zIndex: 50 }}
      >
        <div
          className="absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon
            icon={faCogs}
            className={`text-blue-700 duration-300 ${!open && "rotate-180"}`}
          />
        </div>

        <div className="flex items-center pb-5">
          <img src={logo} alt="Stufit Approach" title="" />
        </div>

        <hr />

        <ul className="pt-10 justify-center space-y-8 divide-y divide-gray-300">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-black hover:text-white text-gray-700 text-sm items-center gap-x-4 hover:bg-gradient-to-r from-blue-500 to-blue-800 font-bold shadow-sm
              ${index === 0 && "bg-light-white"}`}
            >
              <FontAwesomeIcon
                icon={menu.icon}
                className="text-xl transition-colors duration-200"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-transparent shadow-lg z-50 flex justify-between items-center p-4">
        <img src={logo} alt="Stufit Approach" className="w-10" />
        <FontAwesomeIcon
          icon={faBars}
          className="text-blue-700 text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="md:hidden w-full bg-white backdrop-blur-sm shadow-lg absolute top-16 left-0 z-50 text-right">
          <ul className="p-4 space-y-4">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className="flex rounded-md p-2 cursor-pointer hover:bg-gradient-to-tr from-blue-900 to-gray-800 text-gray-500 text-sm items-center gap-x-4 hover:bg-blue-500 hover:text-white font-bold"
              >
                <FontAwesomeIcon icon={menu.icon} className="text-xl" />
                <span>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
