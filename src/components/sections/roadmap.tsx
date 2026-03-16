export function Roadmap() {
    const phases = [
        {
            phase: "Phase 01",
            status: "MVP",
            title: "Das spielbare Fundament",
            description:
                "Der erste Release fokussiert sich auf die Kernidee von TRYBES: reale Fahrten, Teamlogik und sichtbarer Fortschritt.",
            items: [
                "Outdoor- und Indoor-Tracking",
                "Trybe-Gründung und Teambeitritt",
                "Basis-Level-System",
                "Wöchentliche Team-Challenges",
            ],
        },
        {
            phase: "Phase 02",
            status: "Expansion",
            title: "Mehr Tiefe, mehr Identität",
            description:
                "Nach dem MVP erweitern wir das System um stärkere Rollenlogik, langfristige Motivation und Individualisierung.",
            items: [
                "Rollen-System",
                "Saisonale Storylines",
                "Cosmetics und Garage-Ausbau",
                "Mehr strategische Battle-Elemente",
            ],
        },
        {
            phase: "Phase 03",
            status: "Scale",
            title: "Vom Produkt zur Bewegung",
            description:
                "In der Skalierungsphase wird TRYBES zur Plattform für Events, Ligen und größere Community-Dynamiken.",
            items: [
                "Regionale Events",
                "Clan-Ligen",
                "Community-gestützte Challenges",
                "Stärkere Partner- und Markenintegration",
            ],
        },
    ];

    return (
        <section className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Roadmap
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            Built to launch.
                            <span className="block">Designed to scale.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-[#4d4d4d]">
                            TRYBES startet fokussiert und wächst gezielt. Erst das spielbare
                            Kernprodukt, dann mehr Tiefe, mehr Community und mehr Reichweite.
                        </p>
                    </div>

                    <div className="grid gap-5">
                        {phases.map((phase) => (
                            <div
                                key={phase.phase}
                                className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                            {phase.phase}
                                        </p>

                                        <h3 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight">
                                            {phase.title}
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4d4d4d]">
                                            {phase.description}
                                        </p>
                                    </div>

                                    <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                    {phase.status}
                  </span>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {phase.items.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-black/10 bg-[#f6f6f6] px-4 py-3 text-sm leading-6 text-[#2f2f2f]"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 rounded-[2rem] border border-black/10 bg-[#111111] px-8 py-10 text-white">
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Launch
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Das MVP beweist die Kernidee: Bewegung kann ein Multiplayer-Spiel
                                werden.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Expand
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Mit Rollen, Seasons und Cosmetics wächst aus dem Kern ein
                                echtes Live-Produkt.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Scale
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Langfristig wird TRYBES zur Community-Plattform für Teamplay,
                                Wettbewerbe und echte Bike-Culture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}