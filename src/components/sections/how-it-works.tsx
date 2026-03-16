export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Join a Trybe",
            text: "Tritt einem Team bei oder gründe deine eigene Trybe. So beginnt dein Platz im Spiel.",
        },
        {
            number: "02",
            title: "Ride in real life",
            text: "Jede echte Ausfahrt zählt – ob Arbeitsweg, Training oder Feierabendrunde.",
        },
        {
            number: "03",
            title: "Earn progress",
            text: "Aus Bewegung werden XP, Coins und sichtbare Entwicklung im Spiel.",
        },
        {
            number: "04",
            title: "Compete together",
            text: "Kämpft gemeinsam in Battles, Seasons und Team-Challenges um Fortschritt und Siege.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                        How it works
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                        Vier Schritte.
                        <span className="block">Ein klares Spielgefühl.</span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4d4d4d] sm:text-xl">
                        Die Logik von TRYBES ist einfach: Du bewegst dich in der echten Welt
                        und genau daraus entstehen Fortschritt, Teamdynamik und Motivation.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-3xl border border-black/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                        >
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f6f6f6] text-sm font-black uppercase text-[#111111]">
                                {step.number}
                            </div>

                            <h3 className="mt-5 text-2xl font-black uppercase leading-tight">
                                {step.title}
                            </h3>

                            <p className="mt-4 text-base leading-7 text-[#4d4d4d]">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}