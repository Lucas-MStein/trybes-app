import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { ValueProp } from "@/components/sections/value-prop";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Personas } from "@/components/sections/personas";
import { Testimonials } from "@/components/sections/testimonials";
import { Roadmap } from "@/components/sections/roadmap";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
      <>
        <Hero />
        <Problem />
        <ValueProp />
        <Features />
        <HowItWorks />
        <Personas />
        <Testimonials />
        <Roadmap />
        <CTA />
      </>
  );
}