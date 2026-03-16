import { Section } from "@/components/layout/section";

export function Features() {
    const features = [
        {
            title: "Trybes",
            text: "Gründe dein Team oder tritt einer bestehenden Trybe bei. Gemeinsam kämpft ihr um Fortschritt, Missionen und Siege.",
        },
        {
            title: "XP & Progression",
            text: "Jede echte Fahrt bringt Fortschritt. Aus Bewegung werden XP, Coins und sichtbare Entwicklung im Spiel.",
        },
        {
            title: "Roles & Strategy",
            text: "Unterschiedliche Rollen geben jedem Fahrstil einen Platz im Team und machen aus Aktivität echte Taktik.",
        },
    ];

    return (
        <Section id="features" tone="dark">
            <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                    Features
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                    Drei Mechaniken,
                    <span className="block">ein klares Spielgefühl.</span>
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                    TRYBES verbindet Teamplay, Progression und Strategie in einem
                    System, das reale Bewegung spannender und motivierender macht.
                </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b7922f]/40 hover:bg-white/10"
                    >
                        <h3 className="text-3xl font-black uppercase leading-none tracking-tight">
                            {feature.title}
                        </h3>

                        <p className="mt-5 text-base leading-7 text-white/70">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}