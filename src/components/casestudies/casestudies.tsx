import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-4 sm:px-8 py-16 sm:py-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Single Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] relative">
              <Image
                src="/ini.gif"
                alt="Batik Design"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="font-serif italic text-2xl sm:text-3xl md:text-5xl font-semi bold text-deepBrown leading-[1.0] tracking-wide mb-6">
              Search for an idea?
            </h2>
            <p className="text-lg text-earthBrown font-light max-w-2xl lg:max-w-none mx-auto mb-8">
              What do you want to try next? Think of something you&apos;re into—like &quot;modern batik fashion&quot;—and see what you find.
            </p>
            <a 
              href="https://linktr.ee/iwatikbalikpapan?utm_source=linktree_admin_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deepBrown text-cream px-8 py-4 rounded-full 
                       text-lg font-medium transition-all duration-300
                       hover:bg-earthBrown hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-deepBrown focus:ring-offset-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full border-b border-earthBrown/20"></div>
    </section>
  );
}
