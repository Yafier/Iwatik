export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream px-4 sm:px-8 pt-24 sm:pt-32 pb-16 overflow-hidden">
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
      <div className="z-10 text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 max-w-5xl mx-auto">
        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-7xl font-normal text-white leading-tight tracking-normal">
          IWATIK BALIKPAPAN
          <span className="block mt-2 text-3xl sm:text-4xl md:text-6xl">Since 2017</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0">
          Discover the uniqueness of Indonesian culture through our batik collection that blends tradition with contemporary trends. Elegance in batik for every special moment
        </p>
      </div>
    </section>
  );
} 