export function HowItWorks() {
    const steps = [
        {
            number: "01",
            eyebrow: "Join",
            title: "Wähle deine Trybe",
            text: "Starte TRYBES, tritt einem Team bei oder gründe deine eigene Trybe. Schon damit beginnt dein Platz im Spiel.",
        },
        {
            number: "02",
            eyebrow: "Ride",
            title: "Fahr in der echten Welt",
            text: "Jede reale Ausfahrt zählt. Ob Arbeitsweg, Feierabendrunde oder Training – dein Bike bleibt der Controller.",
        },
        {
            number: "03",
            eyebrow: "Earn",
            title: "Sammle Fortschritt",
            text: "Aus echten Kilometern werden XP, Coins und Level. Du siehst sofort, wie jede Fahrt dein Spiel voranbringt.",
        },
        {
            number: "04",
            eyebrow: "Compete",
            title: "Gewinne gemeinsam",
            text: "In Battles, Seasons und Team-Challenges kämpft ihr als Trybe um Rang, Belohnungen und gemeinsamen Triumph.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden bg-[#111111] text-white"
        >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            How it works
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            Vier Schritte.
                            <span className="block">Ein neues Spielgefühl.</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
                            TRYBES ist kein kompliziertes Fitness-Tool. Die Logik ist einfach:
                            Du bewegst dich in der realen Welt – und genau daraus entsteht
                            Fortschritt, Teamdynamik und Motivation.
                        </p>

                        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Core principle
                            </p>
                            <p className="mt-3 text-2xl font-black uppercase leading-tight">
                                Move. Earn. Upgrade. Dominate.
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/70">
                                Genau diese Logik zieht sich durch das gesamte Produkt – von der
                                ersten Fahrt bis zum Battle mit deiner Trybe.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-[#b7922f]/40 hover:bg-white/7"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                            {step.eyebrow}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-black uppercase leading-tight">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black uppercase text-white">
                                        {step.number}
                                    </div>
                                </div>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <div className="grid gap-6 md:grid-cols-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Step 1
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Join a Trybe
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Step 2
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Ride in real life
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Step 3
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Earn XP and Coins
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Step 4
                            </p>
                            <p className="mt-2 text-base leading-7 text-white/75">
                                Compete as a team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}