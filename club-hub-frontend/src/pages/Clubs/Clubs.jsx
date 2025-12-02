import ClubCard from "./ClubCard";

export default function Clubs() {
  const clubs = [
  {
    id: "coding-club",
    title: "Coding Club",
    desc: "Learn programming, build projects, collaborate.",
    image: "https://source.unsplash.com/600x400/?coding,programming",
  },
  {
    id: "robotics-club",
    title: "Robotics Club",
    desc: "Robots, automation, innovation & competitions.",
    image: "https://source.unsplash.com/600x400/?robotics,robot",
  },
  {
    id: "photography-club",
    title: "Photography Club",
    desc: "Capture beautiful moments of campus life.",
    image: "https://source.unsplash.com/600x400/?photography,camera",
  },
  {
    id: "music-club",
    title: "Music Club",
    desc: "Perform, create, and enjoy music together.",
    image: "https://source.unsplash.com/600x400/?music,studio",
  },
  {
    id: "drama-club",
    title: "Drama Club",
    desc: "Acting, theatre, stage shows & creativity.",
    image: "https://source.unsplash.com/600x400/?drama,theatre",
  },
];

  return (
    <div className="pb-16">

      {/* ⭐ Gradient Header */}
      <div className="bg-gradient-to-r from-purpleMain to-purpleAccent text-white py-14 px-6 text-center shadow-lg rounded-b-3xl">
        <h1 className="text-4xl font-extrabold mb-3">Clubs & Communities</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Explore all student clubs — join, learn, collaborate and grow together.
        </p>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-12 mt-10">

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full md:w-1/2 px-5 py-3 rounded-xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-purpleMain focus:outline-none"
          />

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            <button className="px-4 py-2 rounded-full bg-purpleMain text-white font-semibold shadow-md">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-purpleSoft text-purpleMain border border-purpleMain">
              Technical
            </button>
            <button className="px-4 py-2 rounded-full bg-purpleSoft text-purpleMain border border-purpleMain">
              Cultural
            </button>
            <button className="px-4 py-2 rounded-full bg-purpleSoft text-purpleMain border border-purpleMain">
              Sports
            </button>
          </div>
        </div>

        {/* ⭐ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    </div>
  );
}
