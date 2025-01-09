import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream px-8 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left Side */}
          <div className="relative w-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ygGMBIXfpIQ"
                title="KAPTEN BATIK"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-deepBrown leading-tight tracking-tight">
              KAPTEN BATIK
            </h2>
            <p className="text-lg md:text-xl text-earthBrown font-light leading-relaxed">
              MODERN TRENDS, BATIK SOUL:
              <span className="block mt-2">
                KAPTEN BATIK SETS TRENDS WHILE HONORING TRADITION.
              </span>
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-deepBrown text-cream px-8 py-4 rounded-full 
                               text-lg font-medium transition-all duration-300
                               hover:bg-earthBrown hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-deepBrown focus:ring-offset-2">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
