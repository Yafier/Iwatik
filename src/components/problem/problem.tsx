import Image from "next/image";

export default function Problem() {
  const collections = [
    { src: "/men.jpg", title: "" },
    { src: "/woman.jpg", title: "" },
    { src: "/acc.JPG", title: "" },
    { src: "/new.jpeg", title: "" },
    { src: "/col5.jpeg", title: "" },
    { src: "/col7.jpeg", title: "" },
    { src: "/col6.JPG", title: "" },
    { src: "/col.jpg", title: "" },
  ];

  return (
    <section className="min-h-screen bg-cream py-24">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-deepBrown text-center">
          DISCOVER OUR COLLECTION
        </h2>
      </div>

      {/* Grid of Eight Images */}
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <div 
              key={index}
              className="relative aspect-[4/5] overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              <Image
                src={item.src}
                alt={`Collection piece ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 