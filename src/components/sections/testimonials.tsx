export function Testimonials() {
    const stats = [
        {
            value: "67.6%",
            label: "finden die Grundidee motivierend",
        },
        {
            value: "52.9%",
            label: "werden stark durch soziale Aspekte motiviert",
        },
        {
            value: "47.1%",
            label: "finden Gamification sehr wichtig",
        },
    ];

    const quotes = [
        {
            quote: "RPG-Mechaniken würden mich mehr motivieren als nackte Zahlen.",
            person: "Ambitionierter Hobbyfahrer",
            context: "Interview",
        },
        {
            quote: "Den Ansatz, als Team zu agieren, finde ich interessant.",
            person: "Gelegenheitsfahrer",
            context: "Interview",
        },
        {
            quote: "Der Wettkampfmodus würde mir am besten gefallen.",
            person: "Ambitionierter Hobbyfahrer",
            context: "Interview",
        },
    ];

    return (
        <section className="bg-[#111111] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Validation
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            Die Idee klingt
                            <span className="block">nicht nur stark.</span>
                            <span className="block">Sie wird auch bestätigt.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
                            Interviews und Umfrage zeigen klar: Motivation, Teamgefühl und
                            spielerischer Fortschritt treffen einen echten Nerv. Genau dort
                            setzt TRYBES an.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div
                                key={stat.value}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
                            >
                                <p className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                                    {stat.value}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-white/70">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {quotes.map((quote) => (
                        <div
                            key={quote.quote}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                        >
                            <p className="text-3xl leading-none text-[#b7922f]">“</p>

                            <p className="mt-4 text-base leading-8 text-white/85">
                                {quote.quote}
                            </p>

                            <div className="mt-6 border-t border-white/10 pt-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                    {quote.context}
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white/80">
                                    {quote.person}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Key takeaway
                            </p>

                            <h3 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
                                TRYBES trifft genau dort,
                                <span className="block">wo klassische Apps aufhören.</span>
                            </h3>
                        </div>

                        <p className="text-base leading-8 text-white/75 sm:text-lg">
                            Klassische Tracking-Apps liefern Daten. TRYBES liefert Motivation,
                            Teamdynamik und sichtbaren Fortschritt. Genau diese Kombination
                            wurde in Interviews und Umfrage als besonders relevant bestätigt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}