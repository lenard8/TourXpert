import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ComponentCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const navigate = useNavigate(); 

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character.name);
    navigate(`/${character.location}`); 
  };

  const characters = [
    { name: "Tour Guide", image: "/tour-guide.png", location: "tourguide" },
    { name: "Travel Agent", image: "/travel-agent.png", location: "travelagent" },
    { name: "Flight Attendant", image: "/flight-attendant.png", location: "flightattendant" },
    { name: "Hotel Staff", image: "/hotel-staff.png", location: "hotelstaff" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen flex justify-center items-center px-4 py-2">
      <div className="text-center max-w-2xl w-full px-8 lg:pb-4 bg-white shadow-2xl rounded-3xl flex flex-col items-center space-y-8">

        {/* Heading */}
        <h3 className="text-xl font-bold text-blue-700 pt-2">TourXpert</h3>
        <h2 className="text-2xl sm:text-2xl font-extrabold text-gray-800">Choose Your Character</h2>

        {/* Character Options */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 w-full">
          {characters.map((character, index) => (
            <button
              key={index}
              className={`py-2 mb-2 px-2 flex flex-col items-center text-white rounded-2xl shadow-md transition-all duration-300 ${
                selectedCharacter === character.name ? "bg-blue-600" : "bg-blue-900"
              } hover:bg-blue-700 hover:scale-105`}
              onClick={() => handleCharacterSelect(character)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="text-lg font-semibold">{character.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
