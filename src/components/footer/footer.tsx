import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#5f706d] py-4">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-white/20"></div>
      
      {/* Logo Container */}
      <div className="flex justify-center items-center">
        <div className="w-40 h-39 relative">
          <Image
            src="/iwatikicon.png"
            alt="IWATIK Logo"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-xs text-white -mt-1">
        © 2024 IWATIK BALIKPAPAN. All rights reserved.
      </p>
    </footer>
  );
} 