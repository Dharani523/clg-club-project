export default function TopClubs() {
  const clubs = [
    { title: "Coding Club", desc: "Learn coding & build projects." },
    { title: "Robotics Club", desc: "Robots, AI & innovation." },
    { title: "Photography Club", desc: "Capture campus moments." },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Top Clubs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white shadow-xl p-8 border-l-8"
            style={{ borderColor: "#A88CFF" }}
          >
            <h3 className="text-xl font-bold text-purpleMain">{club.title}</h3>
            <p className="text-gray-600 mt-2">{club.desc}</p>
            <button className="mt-4 bg-purpleMain text-white px-4 py-2 rounded-xl font-medium">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
