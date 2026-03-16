export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
                <div className="mb-10 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b6b6b]">
                        Multiplayer Cycling Game
                    </div>

                </div>

                <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Game-first. Team-based. Real movement.
                        </p>

                        <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            Dein bike ist
                            <span className="block">der controller.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4d4d4d] sm:text-xl">
                            TRYBES macht aus Bewegung ein Multiplayer-Spiel. Jeder Ride bringt
                            Fortschritt, jede Mission zählt für dein Team und aus Training wird
                            endlich ein echtes Erlebnis.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#how-it-works"
                                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#111111] px-7 py-4 transition hover:bg-black"
                            >
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  How it works
                </span>
                            </a>

                            <a
                                href="#features"
                                className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#111111] px-7 py-4 transition hover:bg-[#111111]"
                            >
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] transition group-hover:text-white">
                  Explore the game
                </span>
                            </a>
                        </div>

                        {/* Feature boxes */}
                        <div className="mt-12 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                    Teamplay
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1b1b1b]">
                                    Fahr nicht alleine. Gründe deine Trybe und kämpft gemeinsam.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                    Progression
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1b1b1b]">
                                    Jeder Kilometer erzeugt XP, Coins und echte Entwicklung.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                    Strategy
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#1b1b1b]">
                                    Rollen, Taktik und Clan-Battles statt Datenfriedhof.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className="relative">
                        <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-[#b7922f]/15 blur-3xl lg:block" />
                        <div className="absolute -right-4 bottom-4 hidden h-40 w-40 rounded-full bg-black/10 blur-3xl lg:block" />

                        <div className="relative mx-auto max-w-md">
                            <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                <div className="rounded-[1.6rem] bg-[#f6f6f6] p-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b6b6b]">
                                                Live Mission
                                            </p>
                                            <h2 className="mt-1 text-2xl font-black uppercase leading-none">
                                                Vom Training
                                                <span className="block">zum Triumph</span>
                                            </h2>
                                        </div>

                                        <div className="rounded-full bg-[#b7922f] px-3 py-2 text-xs font-bold uppercase text-white">
                                            Lv 12
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-[1.4rem] border border-black/10 bg-[#dddddd]">
                                        <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f2f2f2_0%,#d7d7d7_100%)] p-5">
                                            <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-black/10 bg-white/50 p-4 backdrop-blur-sm">

                                                <div className="flex items-center justify-between">
                          <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                            Trybe Rival
                          </span>
                                                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                            7 Tage · 1 Ziel
                          </span>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                                                        <div className="mb-2 flex items-center justify-between">
                              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                Team Score
                              </span>
                                                            <span className="text-sm font-black uppercase">
                                765 XP
                              </span>
                                                        </div>

                                                        <div className="h-3 rounded-full bg-black/10">
                                                            <div className="h-3 w-[72%] rounded-full bg-[#b7922f]" />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-3">
                                                        <div className="rounded-2xl bg-white/80 p-3 text-center shadow-sm">
                                                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                                                Team
                                                            </p>
                                                            <p className="mt-1 text-lg font-black">24</p>
                                                        </div>

                                                        <div className="rounded-2xl bg-white/80 p-3 text-center shadow-sm">
                                                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                                                XP
                                                            </p>
                                                            <p className="mt-1 text-lg font-black">+320</p>
                                                        </div>

                                                        <div className="rounded-2xl bg-white/80 p-3 text-center shadow-sm">
                                                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                                                Coins
                                                            </p>
                                                            <p className="mt-1 text-lg font-black">180</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="rounded-2xl border border-black/10 bg-[#00c8ff]/15 p-3">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                                            XP
                                                        </p>
                                                        <p className="mt-1 text-xl font-black">
                                                            Nur durchs Spielen
                                                        </p>
                                                    </div>

                                                    <div className="rounded-2xl border border-black/10 bg-[#f0c33c]/20 p-3">
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                                                            Coins
                                                        </p>
                                                        <p className="mt-1 text-xl font-black">
                                                            Upgrades & Shop
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                                        Game-design statt Daten-Friedhof
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom statements */}
                <div className="mt-16 grid gap-6 border-t border-black/10 pt-8 text-sm text-[#3a3a3a] md:grid-cols-3">
                    <div>
                        <p className="font-black uppercase">Move</p>
                        <p className="mt-2 leading-6">
                            Echte Welt = Spielfeld. Jeder Ride generiert In-Game-Fortschritt.
                        </p>
                    </div>

                    <div>
                        <p className="font-black uppercase">Upgrade</p>
                        <p className="mt-2 leading-6">
                            XP, Coins, Rollen und Garage machen jede Fahrt spürbar wertvoll.
                        </p>
                    </div>

                    <div>
                        <p className="font-black uppercase">Dominate</p>
                        <p className="mt-2 leading-6">
                            Trybe Battles, Teamkonto und Strategien verwandeln Training in Triumph.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}