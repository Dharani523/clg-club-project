export default function ClubGallery() {
  const images = [
    "https://source.unsplash.com/600x400/?students,event",
    "https://source.unsplash.com/600x400/?coding,workshop",
    "https://source.unsplash.com/600x400/?college,classroom",
    "https://source.unsplash.com/600x400/?project,presentation",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="rounded-xl shadow-md h-40 md:h-56 object-cover hover:scale-105 transition"
        />
      ))}
    </div>
  );
}
