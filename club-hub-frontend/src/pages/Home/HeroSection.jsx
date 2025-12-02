export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] bg-gradient-to-r from-purpleMain to-purpleAccent text-white py-24 px-6 text-center flex flex-col justify-center">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
    Discover Clubs.
    <br />
    Join Events.
    <br />
    Grow Together.
  </h1>

  <p className="max-w-2xl mx-auto text-lg opacity-90 mb-6">
    Explore college clubs, departments, events, and announcements — all in one dynamic platform.
  </p>

  <div className="flex flex-col md:flex-row gap-4 justify-center">
    <button className="bg-white text-purpleMain px-6 py-3 rounded-xl font-semibold">
      Explore Clubs
    </button>
    <button className="border border-white px-6 py-3 rounded-xl font-semibold">
      View Events
    </button>
  </div>
</section>

  );
}
