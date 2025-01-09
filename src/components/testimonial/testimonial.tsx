import Image from "next/image";
import Marquee from "../ui/marquee";

const testimonials = [
  {
    quote: "A transformative experience in contemporary craft.",
    author: "Art Review Magazine",
    role: "Publication",
    image: "/tes1.jpg"
  },
  {
    quote: "Setting new standards in artistic excellence.",
    author: "Contemporary Arts Weekly",
    role: "Journal",
    image: "/tes 2.jpg"
  },
  {
    quote: "Bridging tradition with modern innovation.",
    author: "Design Quarterly",
    role: "Magazine",
    image: "/tes 3.jpg"
  },
  {
    quote: "A masterclass in craftsmanship evolution.",
    author: "Creative Culture Today",
    role: "Platform",
    image: "/tes 4.jpg"
  }
];

<section className="py-20 bg-sand relative overflow-hidden">
{/* Left Gradient Mask */}
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-sand to-transparent z-10" />
{/* Right Gradient Mask */}
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-sand to-transparent z-10" />

<div className="max-w-7xl mx-auto px-8">
  {/* Section Header */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-deepBrown mb-4">
      What People Are Saying
    </h2>
    <p className="text-earthBrown text-lg max-w-2xl mx-auto">
      Join the global conversation about craft excellence and innovation
    </p>
  </div>

  {/* Marquee Testimonials */}
  <Marquee 
    className="py-8" 
    pauseOnHover={true}
  >
    {testimonials.map((testimonial, index) => (
      <div 
        key={testimonial.author}
        className="mx-8 bg-cream p-8 rounded-2xl shadow-lg min-w-[300px] md:min-w-[400px] transform transition-all duration-300 hover:scale-105"
      >
        <div className="flex gap-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-deepBrown text-lg md:text-xl font-light mb-4 italic">
              "{testimonial.quote}"
            </p>
            <div className="text-earthBrown">
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Marquee>
</div>

{/* 3D Button */}
<div className="mt-16 text-center">
  <a
    href="https://wa.me/6289628000752"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-4 text-lg font-medium text-cream
             bg-gradient-to-b from-earthBrown to-deepBrown
             rounded-full shadow-[0_4px_0_0_#3A2F27]
             transform transition-all duration-200
             hover:-translate-y-1 hover:shadow-[0_6px_0_0_#3A2F27]
             active:translate-y-1 active:shadow-[0_2px_0_0_#3A2F27]
             focus:outline-none focus:ring-2 focus:ring-deepBrown focus:ring-offset-2"
  >
    Explore the Collection
  </a>
</div>
</section>