import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream px-4 sm:px-8 py-16 sm:py-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-deepBrown leading-tight">
              Discover Our
              <span className="block">Batik Borneo Heritage</span>
            </h2>

            <blockquote className="text-earthBrown text-xl sm:text-2xl italic font-serif mt-8">
              &quot;Embracing tradition through contemporary design. Every piece tells a story of Indonesian craftsmanship.&quot;
            </blockquote>

            <a 
              href="https://linktr.ee/iwatikbalikpapan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deepBrown text-cream 
                       px-8 sm:px-12 py-3 sm:py-4 rounded-full 
                       text-base sm:text-lg font-medium mt-6 sm:mt-8 shadow-lg
                       hover:bg-earthBrown transition-all duration-300
                       w-[200px] sm:w-auto"
            >
              Explore Collection
            </a>

            <p className="text-earthBrown text-xs sm:text-sm mt-3 sm:mt-4">
              Experience the art of batik - Visit our collection today
            </p>
          </div>

          {/* Right Side Image - Reduced Size */}
          <div className="w-full lg:w-2/5">
            <div className="relative max-w-sm mx-auto">
              {/* Success Stats Overlay - Adjusted Size */}
              <div className="absolute top-3 right-3 bg-cream px-2.5 py-1 rounded-lg shadow-lg z-10">
                <p className="text-sm font-bold text-deepBrown">500+</p>
                <p className="text-xs text-earthBrown">Unique Designs</p>
              </div>
              <div className="absolute bottom-3 left-3 bg-cream px-2.5 py-1 rounded-lg shadow-lg z-10">
                <p className="text-sm font-bold text-deepBrown">6+</p>
                <p className="text-xs text-earthBrown">Years of Heritage</p>
              </div>
              
              {/* Main Image - More Compact */}
              <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[3/4]">
                <Image
                  src="/tes 2.jpg"
                  alt="Batik Collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 