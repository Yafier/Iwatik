import Hero from "@/components/hero/hero";
import Problem from "@/components/problem/problem";
import Solution from "@/components/solution/solution";
import CTA from "@/components/cta/cta";
import CaseStudies from "@/components/casestudies/casestudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudies />
      <Problem />
      <Solution />
      <CTA />
    </main>
  );
}
