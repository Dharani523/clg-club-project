import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Clubs", path: "/clubs" },
    { name: "Departments", path: "/departments" },
    { name: "Events", path: "/events" },
    { name: "Announcements", path: "/announcements" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">

      {/* LOGO */}
      <h1 className="text-2xl font-extrabold text-purpleMain">
        Club<span className="text-purpleAccent">Hub</span>
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">

        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`relative transition-all duration-300 hover:text-purpleMain ${
              location.pathname === item.path ? "text-purpleMain font-semibold" : ""
            }`}
          >
            {item.name}

            {/* Gradient underline (active) */}
            {location.pathname === item.path && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-purpleMain to-purpleAccent rounded-full"></span>
            )}

            {/* Hover underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purpleMain transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-3xl text-purpleMain"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-4 py-6 px-6 text-lg font-medium md:hidden z-50">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`${
                location.pathname === item.path
                  ? "text-purpleMain font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
