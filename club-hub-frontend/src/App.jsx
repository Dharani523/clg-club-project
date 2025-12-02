import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages you already created */
import Home from "./pages/Home/Home";
import Clubs from "./pages/Clubs/Clubs";
import ClubDetails from "./pages/Clubs/ClubDetails";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Page container (prevents navbar overlap) */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />

          {/* Dynamic Club Details Page */}
          <Route path="/clubs/:id" element={<ClubDetails />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}
