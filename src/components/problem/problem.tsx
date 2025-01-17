'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-cream py-24">
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
                transitionDelay: `${index * 200}ms`
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

      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
} 