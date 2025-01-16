import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream px-4 sm:px-8 py-16 sm:py-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Main Heading */}
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-deepBrown leading-tight">
              Discover Our
              <span className="block">Batik Heritage</span>
            </h2>

            {/* Quote */}
            <blockquote className="text-earthBrown text-xl sm:text-2xl italic font-serif mt-8">
              &quot;Embracing tradition through contemporary design. Every piece tells a story of Indonesian craftsmanship.&quot;
            </blockquote>

            {/* CTA Button */}
            <a 
              href="https://linktr.ee/iwatikbalikpapan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deepBrown text-cream px-12 py-4 rounded-full 
                       text-lg font-medium mt-8 shadow-lg
                       hover:bg-earthBrown transition-all duration-300"
            >
              Explore Collection
            </a>

            {/* Limited spots text */}
            <p className="text-earthBrown text-sm mt-4">
              Experience the art of batik - Visit our collection today
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Success Stats Overlay */}
              <div className="absolute top-4 right-4 bg-cream px-3 py-1 rounded-xl shadow-lg">
                <p className="text-sm sm:text-lg font-bold text-deepBrown">500+</p>
                <p className="text-xs sm:text-sm text-earthBrown">Unique Designs</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-cream px-3 py-1 rounded-xl shadow-lg">
                <p className="text-sm sm:text-lg font-bold text-deepBrown">6+</p>
                <p className="text-xs sm:text-sm text-earthBrown">Years of Heritage</p>
              </div>
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[3/4]">
                <Image
                  src="/tes 2.jpg"
                  alt="Batik Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 