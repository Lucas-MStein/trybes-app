import { Section } from "@/components/layout/section";

export function Hero() {
    return (
        <Section tone="light" spacing="hero">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b6b6b]">
                Multiplayer Cycling Game
            </div>

            <div className="max-w-5xl">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                    Game-first. Team-based. Real movement.
                </p>

                <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
                    Dein Bike ist
                    <span className="block">der Controller.</span>
                </h1>

                <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                    TRYBES macht aus Bewegung ein Multiplayer-Spiel. Jeder Ride bringt
                    Fortschritt, jede Mission zählt für dein Team und aus Training wird
                    ein echtes Erlebnis.
                </p>
            </div>
        </Section>
    );
}