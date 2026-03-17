import { Section } from "@/components/layout/section";

export function Roadmap() {
    const phases = [
        {
            label: "01 · MVP",
            title: "Das spielbare Fundament",
            text: "Tracking, Trybes und sichtbarer Fortschritt machen die Kernidee von TRYBES erlebbar.",
        },
        {
            label: "02 · Expansion",
            title: "Mehr Tiefe und Identität",
            text: "Rollen, Seasons und Cosmetics erweitern das System um langfristige Motivation und Strategie.",
        },
        {
            label: "03 · Scale",
            title: "Von der App zur Community",
            text: "Events, Ligen und größere Challenges machen TRYBES zur Plattform für echte Bike-Culture.",
        },
    ];

    return (
        <Section id="roadmap" tone="dark">
            <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                    Roadmap
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                    Built to launch.
                    <span className="block">Designed to scale.</span>
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                    TRYBES startet fokussiert und wächst gezielt: erst das spielbare
                    Kernprodukt, dann mehr Tiefe, mehr Community und mehr Reichweite.
                </p>
            </div>

            <div className="relative mt-16">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

                <div className="space-y-8">
                    {phases.map((phase, index) => (
                        <div
                            key={phase.label}
                            className={`relative md:grid md:grid-cols-[56px_1fr] md:gap-6 ${
                                index % 2 === 1 ? "lg:translate-x-8" : ""
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="relative hidden md:flex">
                                <div className="absolute left-[9px] top-7 h-3 w-3 rounded-full bg-[#b7922f] shadow-[0_0_0_6px_rgba(183,146,47,0.12)]" />
                            </div>

                            {/* Card */}
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b7922f]/40 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                    {phase.label}
                                </p>

                                <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                                    {phase.title}
                                </h3>

                                <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                                    {phase.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}