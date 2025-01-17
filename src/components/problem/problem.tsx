"use client";

import Image from "next/image";
import { useEffect } from "react";

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '-50px',
        }
      );

      const hiddenElements = document.querySelectorAll('.fade-in');
      hiddenElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-white py-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-8 mb-16 fade-in">
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
              className="relative aspect-[4/5] overflow-hidden fade-in"
              style={{ 
                minHeight: '400px',
                transitionDelay: `${index * 0.2}s`
              }}
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

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full border-b border-earthBrown/20"></div>
    </section>
  );
} 