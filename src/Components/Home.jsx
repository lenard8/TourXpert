import React from "react";
import logo from '/logo.png';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/character");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen flex justify-center items-center px-4 py-4">
      <div className="text-center max-w-md w-full p-8 bg-white shadow-2xl rounded-3xl flex flex-col items-center space-y-8 pb-2 ">

        {/* Centered Logo */}
        <div>
          <img src={logo} alt="TourXpert Logo" className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto mt-36" />
        </div>

        {/* Welcome Text */}
        <div className="text-gray-800 space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Welcome to <span className="text-blue-700">TourXpert!</span></h1>
          <h2 className="text-lg sm:text-xl mt-2 font-medium">Ready to experience life in tourism?</h2>
        </div>

        {/* Start Button */}
        <button
          className="mt-4 py-3 px-8 mb-36 bg-blue-900 text-white text-lg rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
          onClick={handleStartClick}
        >
          Play Game
        </button>
        
      </div>
    </div>
  );
}
