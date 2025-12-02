import { clubMembers } from "../../data/clubMembers";

export default function ClubMembersList({ clubId }) {
  const members = clubMembers[clubId] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {members.map((m, i) => (
        <div key={i} className="card p-6 text-center">
          <img src={m.img} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold mt-4">{m.name}</h3>
          <p className="text-purpleMain font-medium">{m.role}</p>
        </div>
      ))}
    </div>
  );
}
