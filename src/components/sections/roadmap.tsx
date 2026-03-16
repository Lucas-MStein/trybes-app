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
        <section id="roadmap" className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Roadmap
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                            Built to launch.
                            <span className="block">Designed to scale.</span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                            TRYBES startet fokussiert und wächst gezielt: erst das spielbare
                            Kernprodukt, dann mehr Tiefe, mehr Community und mehr Reichweite.
                        </p>
                    </div>

                    <div className="grid gap-5">
                        {phases.map((phase) => (
                            <div
                                key={phase.label}
                                className="rounded-3xl border border-black/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                    {phase.label}
                                </p>

                                <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                                    {phase.title}
                                </h3>

                                <p className="mt-4 text-base leading-7 text-[#4d4d4d]">
                                    {phase.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}