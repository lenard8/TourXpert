import { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./Components/Home";
import { ComponentCharacter } from './Components/ComponentCharacter';
import { CmpTourGuides } from './Components/CmpTourGuides';
import { CmpTravelAgentQuiz } from './Components/CmpTravelAgentQuiz';
import { CmpHotelStaffQuiz } from './Components/CmpHotelStaffQuiz';
import { CmpFlightAttendantQuiz } from './Components/CmpFlightAttendantQuiz';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
{/*           <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/character" element={<ComponentCharacter />} />
          <Route exact path="/tourguide" element={<CmpTourGuides />} />
          <Route exact path="/travelagent" element={<CmpTravelAgentQuiz />} />
          <Route exact path="/hotelstaff" element={<CmpHotelStaffQuiz />} />
          <Route exact path="/flightattendant" element={<CmpFlightAttendantQuiz />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
