import Image from "next/image";

export default function Solution() {
  return (
    <section className="min-h-screen bg-cream py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">NEW ARRIVAL</h2>
        <p className="text-gray-600">VIEW ALL</p>
      </div>

      {/* Product Carousel */}
      <div className="relative max-w-[90%] mx-auto">
        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10">
          <span className="text-2xl">←</span>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10">
          <span className="text-2xl">→</span>
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-4">
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                NEW IN
              </div>
              <Image
                src="/tes 1.jpg"
                alt="Product 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="bg-white text-black px-4 py-2 text-sm">
                  QUICK BUY
                </button>
              </div>
            </div>
            <h3 className="font-medium mb-2">Maharaja Modern Fit Eight Petals</h3>
            <div className="flex items-center gap-2 mb-2">
              <span>★★★★★</span>
              <span className="text-sm text-gray-600">(1) Reviews</span>
            </div>
            <p className="font-bold">RM269.00</p>
          </div>

          {/* Product Card 2 */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-4">
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                NEW IN
              </div>
              <Image
                src="/tes 2.jpg"
                alt="Product 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="bg-white text-black px-4 py-2 text-sm">
                  QUICK BUY
                </button>
              </div>
            </div>
            <h3 className="font-medium mb-2">My Slim Fit Lantern Petals</h3>
            <div className="flex items-center gap-2 mb-2">
              <span>★★★★★</span>
              <span className="text-sm text-gray-600">(2) Reviews</span>
            </div>
            <p className="font-bold">RM199.00</p>
          </div>

          {/* Product Card 3 */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-4">
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                NEW IN
              </div>
              <Image
                src="/tes 3.jpg"
                alt="Product 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="bg-white text-black px-4 py-2 text-sm">
                  QUICK BUY
                </button>
              </div>
            </div>
            <h3 className="font-medium mb-2">Nusantara Modern Fit Fungus</h3>
            <div className="flex items-center gap-2 mb-2">
              <span>★★★★★</span>
              <span className="text-sm text-gray-600">(1) Reviews</span>
            </div>
            <p className="font-bold">RM289.00</p>
          </div>

          {/* Product Card 4 */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-4">
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                NEW IN
              </div>
              <Image
                src="/tes 4.jpg"
                alt="Product 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="bg-white text-black px-4 py-2 text-sm">
                  QUICK BUY
                </button>
              </div>
            </div>
            <h3 className="font-medium mb-2">My Modern Fit Stag Beetle</h3>
            <div className="flex items-center gap-2 mb-2">
              <span>★★★★★</span>
              <span className="text-sm text-gray-600">(2) Reviews</span>
            </div>
            <p className="font-bold">RM179.00</p>
          </div>
        </div>
      </div>
    </section>
  );
} 