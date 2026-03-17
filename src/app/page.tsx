
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Roadmap } from "@/components/sections/roadmap";
import { CTA } from "@/components/sections/cta";


export default function HomePage() {
  return (
      <>
        <div id="top" />
        <Hero />
        <Features />
        <HowItWorks />
        <Roadmap />
        <CTA />
      </>
  );
}