"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Solution() {
  // Add banner images array
  const bannerImages = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
    "/banner5.jpg",
    "/banner6.jpg",
  ];

  // Add state for banner
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Add useEffect for banner auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Move the state declarations to the top level
  const [currentIndices, setCurrentIndices] = useState<{ [key: string]: number }>({
    "Men's Collection": 0,
    "Women's Collection": 0,
    "Batik Tulis Collection": 0
  });

  // Add state for tracking screen width
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect to detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the sm breakpoint in Tailwind
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Modify itemsPerPage to be dynamic based on screen size
  const itemsPerPage = isMobile ? 1 : 4;

  const scrollLeft = (category: string) => {
    if (currentIndices[category] > 0) {
      setCurrentIndices({
        ...currentIndices,
        [category]: currentIndices[category] - (isMobile ? 1 : itemsPerPage)
      });
    }
  };

  const scrollRight = (category: string, maxLength: number) => {
    if (currentIndices[category] + (isMobile ? 1 : itemsPerPage) < maxLength) {
      setCurrentIndices({
        ...currentIndices,
        [category]: currentIndices[category] + (isMobile ? 1 : itemsPerPage)
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "Batik Heritage Kimono",
      price: "Rp 899.000",
      image: "/BHK-1.JPEG",
      category: "Men's Collection",
      soldOut: false
    },
    {
      id: 2,
      name: "Batik Heritage Kimono",
      price: "Rp 899.000",
      image: "/BHK-2.jpg",
      category: "Men's Collection",
      soldOut: true
    },
    {
      id: 3,
      name: "Batik Heritage Kimono",
      price: "Rp 999.000",
      image: "/BHK-3.JPEG",
      category: "Men's Collection",
      soldOut: false
    },
    {
      id: 4,
      name: "Batik Heritage Kimono",
      price: "Rp 899.000",
      image: "/BHK-4.JPEG",
      category: "Men's Collection",
      soldOut: true
    },
    {
      id: 5,
      name: "Batik Heritage Kimono",
      price: "Rp 899.000",
      image: "/BHK-8.JPEG",
      category: "Men's Collection",
      soldOut: true
    },
    {
      id: 6,
      name: "Batik Heritage Kimono",
      price: "Rp 649.000",
      image: "/MBK-black.jpeg",
      category: "Men's Collection",
      soldOut: false
    },
    {
      id: 7,
      name: "Batik Heritage Kimono",
      price: "Rp 649.000",
      image: "/MBK-brown.jpeg",
      category: "Men's Collection",
      soldOut: false
    },
    {
      id: 8,
      name: "Men's Batik Suit",
      price: "Rp 1.049.000",
      image: "/MS-yellow.jpg",
      category: "Men's Collection",
      soldOut: false
    },
    {
      id: 9,
      name: "Long Sleeve Batik Shirt",
      price: "Rp 999.000",
      image: "/LSB.jpeg",
      category: "Men's Collection",
      soldOut: true
    },
    {
      id: 10,
      name: "Borneo Batik Dress",
      price: "Rp 1.049.000",
      image: "/WDC-pink.jpg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 11,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 649.000",
      image: "/WOS-green.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 12,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 649.000",
      image: "/WOS-brown.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 13,
      name: "Borneo Batik Dress",
      price: "Rp 1.049.000",
      image: "/WDC-brown.jpg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 14,
      name: "Borneo Batik Dress",
      price: "Rp 1.049.000",
      image: "/WDC-green.jpg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 15,
      name: "Borneo Batik Dress",
      price: "Rp 1.049.000",
      image: "/WDC-mint.jpg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 16,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 549.000",
      image: "/WS-orange.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 17,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 549.000",
      image: "/WS-blue.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 18,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 549.000",
      image: "/WS-yellow-red.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 19,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 899.000",
      image: "/BPBS-2.JPEG",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 20,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 899.000",
      image: "/BPBS-3.JPEG",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 21,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 549.000",
      image: "/WOS-black.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 22,
      name: "Borneo Patchwork Batik Shirt",
      price: "Rp 999.000",
      image: "/BPBS-4.JPEG",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 23,
      name: "Borneo Patchwork Batik Vest",
      price: "Rp 599.000",
      image: "/BPBV-5.JPEG",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 24,
      name: "Borneo Patchwork Batik Vest",
      price: "Rp 499.000",
      image: "/BPBV-6.jpg",
      category: "Women's Collection",
      soldOut: true
    },
    {
      id: 25,
      name: "Borneo Patchwork Batik Vest",
      price: "Rp 599.000",
      image: "/BPBV-7.jpg",
      category: "Women's Collection",
      soldOut: true
    },
    {
      id: 26,
      name: "Borneo Batik Dress for Kids",
      price: "Rp 649.000",
      image: "/WB-yellow.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 27,
      name: "Borneo Batik Dress for Kids",
      price: "Rp 649.000",
      image: "/WB-blue.jpeg",
      category: "Women's Collection",
      soldOut: false
    },
    {
      id: 28,
      name: "Pakis Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-1.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 29,
      name: "Dragon Fruit Motif Batik Tulis",
      price: "Rp 1.499.000",
      image: "/BT-2.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 30,
      name: "Lempuyang Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-3.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 31,
      name: "Ilalang Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-4.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 32,
      name: "Dragon Fruit Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-5.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 33,
      name: "Hornbill Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-6.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 34,
      name: "Pakis Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-7.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 35,
      name: "Pakis Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-8.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
    {
      id: 36,
      name: "Ilalang Motif Batik Tulis",
      price: "Rp 899.000",
      image: "/BT-9.jpeg",
      category: "Batik Tulis Collection",
      soldOut: false
    },
  ];

  const handleWhatsAppClick = (product: { name: string; price: string; image: string }) => {
    const phoneNumber = "6281346376436";
    const imageUrl = `https://iwatik.vercel.app${product.image}`;
    const message = encodeURIComponent(
      `Halo kak, aku tertarik dengan produk ini :\n\n${product.name}\nPrice: ${product.price}\n\nProduct Image: ${imageUrl}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Group products by category
  const categories = ["Men's Collection", "Women's Collection", "Batik Tulis Collection"];

  return (
    <section className="relative min-h-screen bg-white pt-16 pb-0">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-deepBrown mb-2">OUR PRODUCT</h2>
        <p className="text-earthBrown">2025</p>
      </div>

      {/* Product Grid Container */}
      <div className="max-w-[90%] mx-auto">
        {categories.map((category) => {
          const filteredProducts = products.filter(product => product.category === category);
          const currentIndex = currentIndices[category];

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-deepBrown mb-4">{category}</h2>
              <div className="flex items-center">
                <button 
                  onClick={() => scrollLeft(category)}
                  disabled={currentIndex === 0}
                  className="bg-deepBrown text-cream px-4 py-2 rounded disabled:opacity-50 mr-2"
                >
                  &lt;
                </button>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300" 
                    style={{ 
                      transform: `translateX(-${currentIndex * (isMobile ? 100 : 25)}%)`,
                      gap: isMobile ? '0' : '8px' 
                    }}
                  >
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className={`flex-shrink-0 ${
                          isMobile 
                            ? 'w-full' 
                            : 'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'
                        } p-2 relative`}
                      >
                        <div className="flex flex-col">
                          <div className="relative aspect-[4/5] mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 23vw"
                            />
                            {product.soldOut && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                                SOLD OUT
                              </div>
                            )}
                          </div>
                          <h3 className="font-medium mb-2 text-lg">{product.name}</h3>
                          <p className="font-bold mb-4 text-lg">{product.price}</p>
                          <button 
                            onClick={() => handleWhatsAppClick(product)}
                            disabled={product.soldOut}
                            className={`bg-deepBrown text-cream text-center px-6 py-3 rounded-full
                                     text-sm font-medium transition-all duration-300
                                     hover:bg-earthBrown mt-auto ${product.soldOut ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => scrollRight(category, filteredProducts.length)}
                  disabled={currentIndex + (isMobile ? 1 : itemsPerPage) >= filteredProducts.length}
                  className="bg-deepBrown text-cream px-4 py-2 rounded disabled:opacity-50 ml-2"
                >
                  &gt;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Banner Section - Moved to bottom */}
      <div className="relative w-full aspect-[21/9] mt-8">
        {bannerImages.map((image, index) => (
          <div
            key={image}
            className="absolute w-full h-full transition-opacity duration-1000"
            style={{ opacity: index === currentBannerIndex ? 1 : 0 }}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 