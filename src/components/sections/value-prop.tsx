export function ValueProp() {
    const values = [
        {
            title: "Dein Bike ist der Controller",
            text: "TRYBES nutzt keine künstliche Spielwelt als Ersatz, sondern macht reale Bewegung selbst zur zentralen Spielmechanik.",
        },
        {
            title: "Fortschritt wird spürbar",
            text: "Jede Fahrt erzeugt XP, Coins und Entwicklung. Aus abstrakten Kilometern wird sichtbarer Fortschritt im Spiel.",
        },
        {
            title: "Teamplay statt Alleinkampf",
            text: "Du fährst nicht nur für dich. Trybes, Rollen und gemeinsame Ziele machen aus isoliertem Training ein Team-Erlebnis.",
        },
        {
            title: "Game-Design statt Daten-Friedhof",
            text: "Im Mittelpunkt stehen Motivation, Spannung und Dynamik – nicht nur Dashboards, Zahlen und Vergleichstabellen.",
        },
    ];

    return (
        <section className="bg-[#111111] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            The value
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            Wir machen aus
                            <span className="block">Bewegung kein Tracking.</span>
                            <span className="block">Wir machen daraus ein Spiel.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
                            TRYBES verbindet reale Aktivität mit Progression, Strategie und
                            Gemeinschaft. So wird aus jeder Fahrt mehr als nur Bewegung:
                            sie wird Teil einer Mission.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                    Core Idea
                                </p>
                                <p className="mt-2 text-lg font-bold">
                                    Die echte Welt ist dein Spielfeld.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                    Difference
                                </p>
                                <p className="mt-2 text-lg font-bold">
                                    Motivation durch Spielmechanik statt nur Statistik.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                            >
                                <h3 className="text-2xl font-black leading-tight text-white">
                                    {value.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/70">
                                    {value.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Move
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Jede reale Fahrt zählt.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Progress
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Jede Aktivität erzeugt Fortschritt.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Belong
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Jede Mission verbindet dich mit deiner Trybe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}