export function CTA() {
    return (
        <section id="cta" className="bg-[#111111] text-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                        Early Access
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                        Dein nächster Ride
                        <span className="block">könnte eine Mission sein.</span>
                    </h2>

                    <p className="mt-8 text-lg leading-relaxed text-white/75 sm:text-xl">
                        Werde Teil der ersten TRYBES Riders und begleite den Start eines
                        neuen Multiplayer-Erlebnisses auf dem Bike.
                    </p>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="mailto:hello@trybes.app?subject=TRYBES%20Early%20Access"
                            className="inline-flex items-center justify-center rounded-full bg-[#b7922f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:brightness-105"
                        >
                            Early Access sichern
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}