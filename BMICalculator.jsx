import React, { useState } from 'react';


const BMICalculator = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [reminderSet, setReminderSet] = useState(false);
  const [message, setMessage] = useState('');


  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; 
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setBmiStatus("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        setBmiStatus("You're Healthy");
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
    }
  };


  const setReminder = () => {
    setReminderSet(true);
    alert("Reminder set for your appointment!");
  };

 
  const sendMessage = () => {
    if (message) {
      alert(`Message sent: ${message}`);
      setMessage('');
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 w-full max-w-md">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">BMI Calculator</h3>
        <div className="bg-gray-700 text-gray-300 py-1 px-3 rounded-lg text-sm">
          Last Week
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-yellow-200 p-4 rounded-lg text-gray-900">
          <p className="text-xs font-semibold mb-1">Height (cm)</p>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            className="w-full bg-transparent border-b-2 border-gray-700 text-xl font-bold outline-none focus:border-blue-500"
          />
        </div>
        <div className="bg-teal-200 p-4 rounded-lg text-gray-900">
          <p className="text-xs font-semibold mb-1">Weight (kg)</p>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            className="w-full bg-transparent border-b-2 border-gray-700 text-xl font-bold outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={calculateBMI}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Calculate BMI
        </button>
      </div>


      {bmi && (
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <p className="text-xs font-semibold">Body Mass Index (BMI)</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-4xl font-bold">{bmi}</p>
            <p className={`py-1 px-2 rounded-lg text-xs ${bmiStatus === "You're Healthy" ? 'bg-green-600' : bmiStatus === 'Underweight' ? 'bg-yellow-500' : 'bg-red-500'}`}>
              {bmiStatus}
            </p>
          </div>
          <div className="mt-2">
            <div className="h-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
            <div className="flex justify-between text-xs mt-1 text-gray-300">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
        </div>
      )}


      <div className="mt-6">
        <p className="text-sm font-semibold mb-1">Body Measurements</p>
        <p className="text-xs text-gray-400">Last checked 2 Days Ago</p>
        <div className="bg-gray-700 text-xs text-gray-400 py-1 px-3 rounded-lg mt-2 inline-block">
          Inverted Triangle Body Shape
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-xs text-gray-400">Chest (in)</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-white">44.5</p>
            <p className="text-red-500 text-xs">&#8593;</p>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-xs text-gray-400">Waist (in)</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-white">34</p>
            <p className="text-green-500 text-xs">&#8595;</p>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg col-span-2">
          <p className="text-xs text-gray-400">Hip (in)</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-white">42.5</p>
            <p className="text-green-500 text-xs">&#8595;</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-700 p-4 rounded-lg">
        <p className="text-sm font-semibold mb-2">Next Appointment</p>
        <p className="text-xs text-gray-300">
          Your next appointment is with <span className="font-bold text-white">Dr. Rizvi</span>, on <span className="font-bold text-white">2nd Nov 2024</span> at <span className="font-bold text-white">9:00 AM</span>.
        </p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={setReminder}
            className={`py-2 px-4 rounded-lg ${reminderSet ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-500'} text-white transition duration-300`}
            disabled={reminderSet} 
          >
            {reminderSet ? "Reminder Set!" : "Set Reminder"}
          </button>
        </div>
      </div>

      <div className="mt-4 bg-gray-700 p-3 rounded-lg col-span-5">
        <p className="text-xs font-semibold mb-1">Send a Message</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full bg-gray-800 text-white text-sm p-1 rounded-lg mb-1 outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-500 transition duration-300 w-full text-xs"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
