import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages you already created */
import Home from "./pages/Home/Home";
import Clubs from "./pages/Clubs/Clubs";
import ClubDetails from "./pages/Clubs/ClubDetails";

/* New Department Pages */
import Departments from "./pages/Departments/Departments";
import DepartmentDetails from "./pages/Departments/DepartmentDetails";

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
          <Route path="/clubs/:id" element={<ClubDetails />} />

          {/* 👉 Add these new department routes here */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetails />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}
