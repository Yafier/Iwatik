import Image from 'next/image';

export default function Hero() {
  return (
    <>
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
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl font-normal text-white leading-[1.1] tracking-wide">
            IWATIK BALIKPAPAN
            <span className="block mt-2">Since 2017</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Discover the uniqueness of Indonesian culture through our <span className="font-bold">BATIK BORNEO</span> collection that blends tradition with contemporary trends. Elegance in batik for every special moment
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full border-b border-earthBrown/20 z-10"></div>
      </section>

      {/* New Features Section */}
      <section className="bg-sage-600 px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-deepBrown mb-4">
              Versetile Elegance for Every Moment
            </h2>
            <p className="text-deepBrown/90 text-lg max-w-3xl mx-auto">
              Step into timeless style with Iwatik Borneo, where tradition meets modern sophistication. Whether you&apos;re conquering the day at the office, enjoying a well-deserved vacation, or embracing the outdoors while working remotely.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col space-y-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image 
                  src="/F1.jpeg" 
                  alt="Professional wearing Batik at work" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-deepBrown flex items-center gap-2">
                  <span className="text-green-300">🌿</span>
                  Effortlessly Chic at Work
                </h3>
                <p className="text-deepBrown/80">
                  Elevate your professional look with intricate batik patterns that exude elegance and confidence in any workspace.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image 
                  src="/F2.jpeg" 
                  alt="Couple wearing Batik outdoors" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-deepBrown flex items-center gap-2">
                  <span className="text-yellow-300">☀️</span>
                  Relaxed & Stylish Outdoors
                </h3>
                <p className="text-deepBrown/80">
                  Whether you&apos;re strolling through nature or exploring new destinations, our breathable fabrics and contemporary designs ensure both comfort and sophistication.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image 
                  src="/F-3.jpg" 
                  alt="Model wearing Batik on runway" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-deepBrown flex items-center gap-2">
                  <span className="text-blue-300">👗</span>
                  Runway-Ready Elegance
                </h3>
                <p className="text-deepBrown/80">
                  Designed with exquisite craftsmanship and bold artistry, our batik pieces are perfect for the spotlight, bringing cultural heritage to the modern fashion stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 