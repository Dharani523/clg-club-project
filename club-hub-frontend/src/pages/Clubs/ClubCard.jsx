import { useNavigate } from "react-router-dom";

export default function ClubCard({ club }) {
  const navigate = useNavigate();

  return (
    <div className="card overflow-hidden hover:-translate-y-1">
      <img src={club.image} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h2 className="text-xl font-bold text-purpleMain">{club.title}</h2>
        <p className="text-gray-600 mt-2">{club.desc}</p>

        <button
          onClick={() => navigate(`/clubs/${club.id}`)}
          className="btn-primary mt-4"
        >
          View Club
        </button>
      </div>
    </div>
  );
}
