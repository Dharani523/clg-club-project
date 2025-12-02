export default function TrendingEvents() {
  const events = [
    { title: "Hackathon 2024", date: "Mar 20, 2024" },
    { title: "Robotics Expo", date: "Apr 5, 2024" },
    { title: "Cultural Fest", date: "Apr 15, 2024" },
  ];

  return (
    <section className="py-16 px-6 bg-purpleSoft">
      <h2 className="text-3xl font-bold text-center mb-10">Trending Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col gap-2 border border-purpleBorder"
          >
            <p className="text-sm text-purpleMain font-semibold">{event.date}</p>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <button className="mt-auto bg-purpleMain text-white px-4 py-2 rounded-xl">
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
