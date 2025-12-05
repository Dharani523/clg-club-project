// src/pages/Departments/DepartmentDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { departments } from "../../data/departmentsData";

export default function DepartmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dept = departments.find((d) => d.id === id);

  if (!dept) {
    return (
      <div className="px-4 py-24 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/departments")}
          className="mb-4 text-purpleMain hover:underline"
        >
          ← Back to Departments
        </button>
        <p>Department not found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-24 max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/departments")}
        className="mb-4 text-purpleMain hover:underline"
      >
        ← Back to Departments
      </button>

      <div className="bg-white rounded-3xl shadow-md border border-purple-100 p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purpleMain mb-2">
          {dept.name}
        </h1>
        <p className="text-sm text-purple-500 mb-4">
          {dept.shortName} • {dept.category}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {dept.description}
        </p>

        <div className="flex gap-6 text-sm">
          <div>
            <p className="text-gray-500 text-xs">Students</p>
            <p className="text-xl font-semibold">{dept.studentsCount}+</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Faculty</p>
            <p className="text-xl font-semibold">{dept.staffCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
