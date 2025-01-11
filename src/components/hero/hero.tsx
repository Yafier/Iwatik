export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream px-8 pt-32 pb-16 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/iwatikvid.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay to ensure text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]"></div>

      {/* Main Content - Following typography hierarchy */}
      <div className="z-10 text-center space-y-6 mb-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          IWATIK BALIKPAPAN 
          <span className="block mt-2">Since 2017</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
          Discover the uniqueness of Indonesian culture through our batik collection that blends tradition with contemporary trends. Elegance in batik for every special moment
        </p>
        
        {/* CTA Button with Linktree URL */}
        <div className="mt-8 flex justify-center">
          <a 
            href="https://linktr.ee/iwatikbalikpapan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-deepBrown text-cream px-8 py-4 rounded-full 
                     text-lg font-medium transition-all duration-300
                     hover:bg-earthBrown hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-deepBrown focus:ring-offset-2"
          >
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
} 