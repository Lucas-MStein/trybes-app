import { Section } from "@/components/layout/section";

export function CTA() {
    return (
        <Section id="cta" tone="light">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                    Join the movement
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                    Dein nächster Ride
                    <span className="block">könnte eine Mission sein.</span>
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                    Werde Teil der ersten TRYBES Riders und begleite den Start von
                    Game-first Cycling.
                </p>

                <div className="mt-12 flex justify-center">
                    <a
                        href="mailto:hello@trybes.app?subject=TRYBES%20Early%20Access"
                        className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-black"
                    >
                        Early Access sichern
                    </a>
                </div>
            </div>
        </Section>
    );
}