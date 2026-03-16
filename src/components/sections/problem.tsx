export function Problem() {
    const problems = [
        {
            number: "01",
            title: "Motivation bricht weg",
            text: "Viele wollen sich mehr bewegen – aber ohne klares Ziel oder direktes Feedback verschwindet der Antrieb schnell wieder.",
        },
        {
            number: "02",
            title: "Daten motivieren nicht genug",
            text: "Klassische Tracking-Apps zeigen Zahlen, aber oft kein echtes Erlebnis. Fortschritt bleibt abstrakt statt spürbar.",
        },
        {
            number: "03",
            title: "Training fühlt sich einsam an",
            text: "Ohne Team, Wettbewerb oder soziale Dynamik bleibt Bewegung oft eine Einzelaufgabe statt ein gemeinsames Erlebnis.",
        },
        {
            number: "04",
            title: "Alltag gewinnt gegen Routine",
            text: "Zeitmangel, fehlende Struktur und spontane Motivation sorgen dafür, dass aus guten Vorsätzen selten Gewohnheiten werden.",
        },
    ];

    return (
        <section className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            The problem
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            Bewegung scheitert
                            <span className="block">oft nicht am Wollen,</span>
                            <span className="block">sondern am Dranbleiben.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-[#4d4d4d]">
                            Genau hier setzt TRYBES an. Nicht mit mehr Zahlen, sondern mit
                            mehr Motivation, mehr Teamgefühl und einer Struktur, die Bewegung
                            wieder spannend macht.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {problems.map((problem) => (
                            <div
                                key={problem.number}
                                className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                            >
                                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#b7922f]">
                                    {problem.number}
                                </p>

                                <h3 className="mt-4 text-2xl font-black leading-tight">
                                    {problem.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#4d4d4d]">
                                    {problem.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 border-t border-black/10 pt-8">
                    <p className="max-w-4xl text-base leading-8 text-[#2f2f2f] sm:text-lg">
                        TRYBES reagiert genau auf diese Lücke: Aus isoliertem Training wird
                        ein spielerisches System mit Fortschritt, Zugehörigkeit und echtem
                        Anreiz, wieder aufs Rad zu steigen.
                    </p>
                </div>
            </div>
        </section>
    );
}