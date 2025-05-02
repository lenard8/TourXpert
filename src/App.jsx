import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Home";
import { ComponentCharacter } from './Components/ComponentCharacter';
import { CmpTourGuides } from './Components/CmpTourGuides';
import { CmpTravelAgentQuiz } from './Components/CmpTravelAgentQuiz';
import { CmpHotelStaffQuiz } from './Components/CmpHotelStaffQuiz';
import { CmpFlightAttendantQuiz } from './Components/CmpFlightAttendantQuiz';

function App() {
  return (
    <BrowserRouter basename="/TourXpert"> 
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* No need for exact */}
        <Route path="/character" element={<ComponentCharacter />} />
        <Route path="/tourguide" element={<CmpTourGuides />} />
        <Route path="/travelagent" element={<CmpTravelAgentQuiz />} />
        <Route path="/hotelstaff" element={<CmpHotelStaffQuiz />} />
        <Route path="/flightattendant" element={<CmpFlightAttendantQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
