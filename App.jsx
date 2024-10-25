import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import BMICalculator from "./components/BMICalculator";

const App = () => {
  const [open, setOpen] = useState(false); 

  return (
    <>
     
      <div className="flex flex-col md:flex-row h-screen bg-black">
    
        <div className={`hidden md:block ${open ? 'w-40' : 'w-20'}`}>
          <Sidebar open={open} setOpen={setOpen} />
        </div>

       
        {open && (
          <div className="md:hidden w-full bg-gray-800">
            <Sidebar open={open} setOpen={setOpen} />
          </div>
        )}

    
        <div className={`flex-1 min-h-screen h-full bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 flex flex-col md:flex-row`}>
       
          <div className="w-full md:w-2/3">
            <Hero />
          </div>

      
          <div className="w-full md:w-1/3">
            <BMICalculator />
          </div>
        </div>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-transparent z-50 flex justify-between items-center p-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
