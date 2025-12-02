import { useParams } from "react-router-dom";
import { useState } from "react";

// DATA FILES
import { clubsData } from "../../data/clubsData";
import { clubMembers } from "../../data/clubMembers";
import { clubEvents } from "../../data/clubEvents";

// COMPONENTS
import ClubGallery from "./ClubGallery";

export default function ClubDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");

  const club = clubsData[id];
  const members = clubMembers[id] || [];
  const events = clubEvents[id] || [];

  if (!club) {
    return (
      <div className="text-center text-xl p-20 font-bold text-red-600">
        Club Not Found 😢
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#faf7ff] min-h-screen">

      {/* ⭐ BEAUTIFUL CLUB HEADER CARD */}
      <div className="w-[94%] md:w-[85%] mx-auto bg-white rounded-3xl shadow-xl p-10 border border-purple-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purpleMain">
          {club.name}
        </h1>

        <p className="text-gray-600 text-lg mt-4 max-w-3xl leading-relaxed">
          {club.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-6 text-gray-700 font-medium">
          <p className="flex items-center gap-2">
            👥 {club.members} Members
          </p>
          <p className="flex items-center gap-2">
            🎉 {club.events} Events
          </p>
          <p className="flex items-center gap-2">
            📅 Since {club.founded}
          </p>
        </div>
      </div>

      {/* ⭐ TABS */}
      <div className="mt-10 w-[94%] md:w-[85%] mx-auto border-b border-gray-300 flex gap-10 text-lg font-semibold overflow-x-auto pb-2">
        {["about", "members", "gallery", "events"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 capitalize transition ${
              activeTab === tab
                ? "text-purpleMain border-b-4 border-purpleMain"
                : "text-gray-600 hover:text-purpleMain"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ⭐ TAB CONTENT */}
      <div className="mt-10 w-[94%] md:w-[85%] mx-auto">

        {/* ABOUT TAB */}
        {activeTab === "about" && (
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-purple-100 text-gray-700 text-lg leading-relaxed space-y-4">
            <p>{club.description}</p>
            <p>
              This club organizes workshops, competitions, seminars, and real-world
              collaboration activities to help students grow in skills and confidence.
            </p>
          </div>
        )}

        {/* MEMBERS TAB */}
        {activeTab === "members" && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {members.map((m, i) => (
                <div key={i} className="card p-6 text-center bg-white shadow-md rounded-2xl">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-semibold mt-4">{m.name}</h3>
                  <p className="text-purpleMain font-medium">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === "gallery" && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <ClubGallery />
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold text-purpleMain">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.desc}</p>
                <p className="mt-2 text-gray-500">📅 {event.date}</p>
              </div>
            ))}

            {events.length === 0 && (
              <p className="text-gray-600 text-lg">No events available.</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
