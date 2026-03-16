export function Personas() {
    const personas = [
        {
            label: "Persona 01",
            title: "Competitive Team Rider",
            subtitle: "Für alle, die Wettbewerb wollen – aber nicht alleine.",
            traits: [
                "nutzt bereits Strava oder Garmin",
                "ist leistungsorientiert, aber teamgetrieben",
                "will mehr als nur Zahlen und Leaderboards",
                "sucht Strategie, Rollen und gemeinsame Ziele",
            ],
            benefit:
                "TRYBES gibt ihm Teamplay, Taktik und ein Spielsystem, das aus individueller Leistung gemeinsamen Fortschritt macht.",
        },
        {
            label: "Persona 02",
            title: "Social Motivated Rider",
            subtitle: "Für alle, die Motivation über Spiel und Gemeinschaft finden.",
            traits: [
                "fährt eher unregelmäßig oder spontan",
                "ist gaming- und social-media-affin",
                "braucht einen spielerischen Anreiz zur Bewegung",
                "will sichtbaren Fortschritt ohne Leistungsdruck",
            ],
            benefit:
                "TRYBES macht aus kleinen Fahrten echte Fortschritte und verbindet Alltag, Motivation und Community in einem einzigen System.",
        },
    ];

    return (
        <section className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Built for
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            TRYBES ist für Menschen,
                            <span className="block">die mehr wollen</span>
                            <span className="block">als nur Tracking.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-[#4d4d4d]">
                            Unsere Zielgruppe verbindet Bewegung mit digitalem Verhalten:
                            wettbewerbsorientiert, community-affin und offen für Gamification.
                            Nicht jeder fährt gleich – aber beide Gruppen suchen Motivation,
                            Fortschritt und ein Erlebnis, das klassisches Tracking nicht bietet.
                        </p>
                    </div>

                    <div className="grid gap-5">
                        {personas.map((persona) => (
                            <div
                                key={persona.title}
                                className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                            {persona.label}
                                        </p>

                                        <h3 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight">
                                            {persona.title}
                                        </h3>

                                        <p className="mt-3 text-base leading-7 text-[#4d4d4d]">
                                            {persona.subtitle}
                                        </p>
                                    </div>

                                    <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Target Group
                  </span>
                                </div>

                                <div className="mt-6 grid gap-3">
                                    {persona.traits.map((trait) => (
                                        <div
                                            key={trait}
                                            className="rounded-2xl border border-black/10 bg-[#f6f6f6] px-4 py-3 text-sm leading-6 text-[#2f2f2f]"
                                        >
                                            {trait}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 border-t border-black/10 pt-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                        Why TRYBES fits
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[#111111]">
                                        {persona.benefit}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 rounded-[2rem] border border-black/10 bg-[#111111] px-8 py-10 text-white">
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Motivation
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                TRYBES spricht Nutzer an, die Bewegung nicht nur messen,
                                sondern erleben wollen.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Community
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Teamgefühl und gemeinsame Ziele machen aus einzelnen Fahrten
                                ein soziales Spielsystem.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Growth
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Beide Zielgruppen bringen Reichweite, Retention und organisches
                                Wachstum durch soziale Dynamik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}