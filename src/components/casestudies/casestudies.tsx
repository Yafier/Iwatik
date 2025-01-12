export default function CaseStudies() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream px-4 sm:px-8 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Side - Single Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
              <img
                src="/ini.gif"
                alt="Batik Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deepBrown leading-tight tracking-tight mb-4">
              Search for an idea
            </h2>
            <p className="text-lg text-earthBrown font-light max-w-2xl lg:max-w-none mx-auto mb-8">
              What do you want to try next? Think of something you're into—like "modern batik fashion"—and see what you find.
            </p>
            {/* Added Linktree Button */}
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
    </section>
  );
}
