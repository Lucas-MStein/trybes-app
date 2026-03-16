export function Testimonials() {
    const stats = [
        {
            value: "67.6%",
            label: "finden die Grundidee motivierend",
        },
        {
            value: "52.9%",
            label: "werden durch soziale Aspekte motiviert",
        },
        {
            value: "47.1%",
            label: "halten Gamification für wichtig",
        },
    ];

    const quotes = [
        {
            quote: "RPG-Mechaniken würden mich mehr motivieren als nackte Zahlen.",
            person: "Ambitionierter Hobbyfahrer",
        },
        {
            quote: "Den Ansatz, als Team zu agieren, finde ich interessant.",
            person: "Gelegenheitsfahrer",
        },
    ];

    return (
        <section id="validation" className="bg-[#111111] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                        Validation
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                        Die Idee überzeugt
                        <span className="block">nicht nur auf dem Papier.</span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                        Interviews und Umfrage zeigen klar: Motivation, Teamgefühl und
                        spielerischer Fortschritt treffen einen echten Nerv.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.value}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
                        >
                            <p className="text-5xl font-black uppercase tracking-tight">
                                {stat.value}
                            </p>

                            <p className="mt-3 text-sm leading-7 text-white/70">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2">
                    {quotes.map((quote) => (
                        <div
                            key={quote.quote}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6"
                        >
                            <p className="text-3xl leading-none text-[#b7922f]">“</p>

                            <p className="mt-4 text-lg leading-8 text-white/85">
                                {quote.quote}
                            </p>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-white/60">
                                {quote.person}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}