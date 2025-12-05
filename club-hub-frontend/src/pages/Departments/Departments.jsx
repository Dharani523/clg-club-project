// src/pages/Departments/Departments.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { departments } from "../../data/departmentsData";

const categories = ["All", "Technical", "Cultural", "Sports"];

export default function Departments() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // search + filter logic (same idea as clubs)
  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(search.toLowerCase()) ||
        dept.shortName.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        dept.category.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleViewDepartment = (id) => {
    navigate(`/departments/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#faf5ff]">
      {/* HERO – same style as Clubs */}
      <section className="bg-gradient-to-r from-purpleMain to-purpleAccent text-white py-16 mt-16 rounded-b-[32px] shadow-md">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Departments & Programs
          </h1>
          <p className="text-lg md:text-xl text-purple-100">
            Explore all academic departments — courses, staff, and opportunities.
          </p>
        </div>
      </section>

      {/* SEARCH BAR – positioned like Clubs */}
      <div className="max-w-5xl mx-auto -mt-10 px-4">
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white text-gray-700 rounded-full px-6 py-4 shadow-xl border border-purple-100 outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>

      {/* MAIN CONTENT – filters + cards */}
      <main className="max-w-5xl mx-auto px-4 pb-16 pt-8">
        {/* Filter chips (All / Technical / Cultural / Sports) */}
        <div className="flex flex-wrap gap-3 mb-8 justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition shadow-sm ${
                activeCategory === cat
                  ? "bg-purpleMain text-white border-purpleMain shadow-lg"
                  : "bg-white text-purpleMain border-purple-200 hover:bg-purple-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid – same feel as Clubs */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDepartments.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No departments found.
            </p>
          )}

          {filteredDepartments.map((dept) => (
            <article
              key={dept.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-purple-100 flex flex-col"
            >
              {/* Top card area (like image area in clubs) */}
              <div className="h-40 bg-white border-b border-purple-100" />

              {/* Bottom content */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-base font-semibold text-purpleMain mb-1 leading-snug">
                  {dept.name}
                </h2>
                <p className="text-xs text-purple-500 font-medium mb-2">
                  {dept.shortName} • {dept.category}
                </p>

                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {dept.description}
                </p>

                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>
                    <span className="font-semibold">
                      {dept.studentsCount}+
                    </span>{" "}
                    Students
                  </span>
                  <span>
                    <span className="font-semibold">{dept.staffCount}</span>{" "}
                    Faculty
                  </span>
                </div>

                <button
                  onClick={() => handleViewDepartment(dept.id)}
                  className="mt-auto w-full bg-purpleMain text-white py-2 rounded-full text-sm font-semibold hover:bg-purpleAccent transition"
                >
                  View Department
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
