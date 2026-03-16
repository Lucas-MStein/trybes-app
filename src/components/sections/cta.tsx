export function CTA() {
    return (
        <section
            id="cta"
            className="relative overflow-hidden bg-[#111111] text-white"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,146,47,0.18),transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                                Join the movement
                            </p>

                            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                                Dein nächster Ride
                                <span className="block">könnte schon</span>
                                <span className="block">eine Mission sein.</span>
                            </h2>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                                TRYBES verbindet Bewegung, Teamplay und Progression zu einem
                                echten Spielerlebnis. Werde Teil der ersten Trybes und begleite
                                den Start von Game-first Cycling.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Early access
                            </p>

                            <p className="mt-3 text-base leading-7 text-white/75">
                                Sichere dir Updates zum Launch, Einblicke in den Prototypen und
                                erfahre als Erste:r, wenn TRYBES live geht.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                                <a
                                    href="mailto:hello@trybes.app?subject=TRYBES%20Early%20Access"
                                    className="inline-flex items-center justify-center rounded-full bg-[#b7922f] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:brightness-105"
                                >
                                    Join Early Access
                                </a>

                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                                >
                                    See how it works
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Move
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/70">
                                Reale Bewegung erzeugt Fortschritt.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Team up
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/70">
                                Gemeinsam fahren, kämpfen und gewinnen.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                                Level up
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/70">
                                Jede Fahrt zählt. Jede Mission bringt euch weiter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}