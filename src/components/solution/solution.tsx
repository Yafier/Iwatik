"use client";

import Image from "next/image";

export default function Solution() {
  const products = [
    {
      id: 1,
      name: "Kimono Batik Pria",
      price: "Rp 650.000",
      image: "/1.jpeg"
    },
    {
      id: 2,
      name: "Kimono Batik Pria",
      price: "Rp 650.000",
      image: "/2.jpeg"
    },
    {
      id: 3,
      name: "Setelan Pria",
      price: "Rp 1.050.000",
      image: "/men.jpg"
    },
    {
      id: 4,
      name: "Dress Wanita",
      price: "Rp 1.050.000",
      image: "/kemejawanita4.jpg"
    },
    {
      id: 5,
      name: "Kemeja Oversize Wanita",
      price: "Rp 650.000",
      image: "/5.jpeg"
    },
    {
      id: 6,
      name: "Kemeja Oversize Wanita",
      price: "Rp 650.000",
      image: "/6.jpeg"
    },
    {
      id: 7,
      name: "Dress Wanita",
      price: "Rp 1.050.000",
      image: "/dress.jpg"
    },
    {
      id: 8,
      name: "Dress Wanita",
      price: "Rp 1.050.000",
      image: "/woman.jpg"
    },
    {
      id: 9,
      name: "Dress Wanita",
      price: "Rp 1.050.000",
      image: "/photo.jpg"
    },
    {
      id: 10,
      name: "Kemeja Wanita",
      price: "Rp 550.000",
      image: "/kemejawanita.jpeg"
    },
    {
      id: 11,
      name: "Kemeja Wanita",
      price: "Rp 550.000",
      image: "/kemejawanita2.jpeg"
    },
    {
      id: 12,
      name: "Kemeja Wanita",
      price: "Rp 550.000",
      image: "/kemejawanita3.jpeg"
    }
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

  return (
    <section className="relative min-h-screen bg-white py-16">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-deepBrown mb-2">OUR PRODUCT</h2>
        <p className="text-earthBrown">2025</p>
      </div>

      {/* Product Grid Container */}
      <div className="max-w-[90%] mx-auto">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative aspect-[4/5] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 23vw"
                />
              </div>
              <h3 className="font-medium mb-2 text-lg">{product.name}</h3>
              <p className="font-bold mb-4 text-lg">{product.price}</p>
              <button 
                onClick={() => handleWhatsAppClick(product)}
                className="bg-deepBrown text-cream text-center px-6 py-3 rounded-full
                         text-sm font-medium transition-all duration-300
                         hover:bg-earthBrown mt-auto"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full border-b border-earthBrown/20"></div>
    </section>
  );
} 