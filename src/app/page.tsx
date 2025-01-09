import Hero from "@/components/hero/hero";
import Problem from "@/components/problem/problem";
import Solution from "@/components/solution/solution";
import CTA from "@/components/cta/cta";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import CaseStudies from "@/components/casestudies/casestudies";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudies />
      <Problem />
      <Solution />
      <CTA />
      {/* Footer with dynamic visibility */}
      <footer className="p-8 text-center bg-cream/80 backdrop-blur-sm">
        <p className="text-sm text-deepBrown font-medium animate-bounce">
          SCROLL TO EXPLORE
        </p>
      </footer>
    </main>
  );
}
