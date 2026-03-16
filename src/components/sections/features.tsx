export function Features() {
    const features = [
        {
            label: "01",
            title: "Trybes",
            text: "Gründe dein Team oder tritt einer bestehenden Trybe bei. Gemeinsam kämpft ihr um XP, Fortschritt und Siege in wöchentlichen Battles.",
            highlight: "Teamplay statt Solo-Tracking",
        },
        {
            label: "02",
            title: "XP & Coins",
            text: "Jede echte Fahrt erzeugt Fortschritt. Aus Bewegung werden Erfahrungspunkte, In-Game-Währung und sichtbare Entwicklung im Spiel.",
            highlight: "Reale Aktivität wird spürbar belohnt",
        },
        {
            label: "03",
            title: "Rollen",
            text: "Unterschiedliche Rollen geben jedem Fahrstil einen Platz im Team. So entsteht Strategie statt bloßem Kilometer-Sammeln.",
            highlight: "Taktik macht den Unterschied",
        },
        {
            label: "04",
            title: "Seasons",
            text: "Saisonale Missionen, neue Ziele und exklusive Inhalte sorgen dafür, dass Motivation nicht nach einer Woche verschwindet.",
            highlight: "Langfristige Dynamik statt kurzer Hype",
        },
        {
            label: "05",
            title: "Single Player",
            text: "Auch allein bleibt TRYBES motivierend. Missionen, Challenges und persönlicher Fortschritt machen jede Fahrt relevant.",
            highlight: "Motivation auch ohne Team",
        },
        {
            label: "06",
            title: "Garage",
            text: "Passe Bike und Charakter an, sammle Upgrades und gestalte deinen Fortschritt sichtbar – nicht nur in Zahlen, sondern im Look deines Spiels.",
            highlight: "Identität, Progression und Style",
        },
    ];

    return (
        <section id="features" className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                        Core features
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                        Alles, was aus
                        <span className="block">einer Fahrt ein Spiel macht.</span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4d4d4d]">
                        TRYBES verbindet Motivation, Fortschritt und Teamplay in einem
                        System. Jede Mechanik zahlt darauf ein, dass Bewegung spannender,
                        sozialer und langfristig relevanter wird.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-3xl border border-black/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                        >
                            <div className="flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-[0.14em] text-[#b7922f]">
                  {feature.label}
                </span>

                                <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                  Feature
                </span>
                            </div>

                            <h3 className="mt-6 text-3xl font-black uppercase leading-none tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#4d4d4d]">
                                {feature.text}
                            </p>

                            <div className="mt-6 border-t border-black/10 pt-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                    Why it matters
                                </p>
                                <p className="mt-2 text-sm font-semibold text-[#111111]">
                                    {feature.highlight}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-[2rem] border border-black/10 bg-[#111111] px-8 py-10 text-white">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                                Why these features work together
                            </p>

                            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                                Nicht ein Feature motiviert.
                                <span className="block">Das System motiviert.</span>
                            </h3>
                        </div>

                        <p className="text-base leading-8 text-white/75 sm:text-lg">
                            Teamlogik, sichtbarer Fortschritt, saisonale Ziele und spielerische
                            Identität greifen ineinander. Genau dadurch wird TRYBES nicht nur
                            zu einer App, sondern zu einem Erlebnis, das Nutzer langfristig
                            zurück aufs Bike bringt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}