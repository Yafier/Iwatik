import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-cream to-white py-4">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full border-t border-earthBrown/20"></div>
      
      {/* Logo Container */}
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image
            src="/logoiwatik.png"
            alt="IWATIK Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-xs text-earthBrown mt-2">
        © 2024 IWATIK BALIKPAPAN. All rights reserved.
      </p>
    </footer>
  );
} 