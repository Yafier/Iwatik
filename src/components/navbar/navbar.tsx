import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-center z-50 bg-cream/80 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <Image
          src="logoiwatik.png"
          alt="Iwatik Logo"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </nav>
  );
} 