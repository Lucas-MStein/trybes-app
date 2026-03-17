export function Footer() {
    const navigation = [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
    ];

    const legal = [
        { label: "Impressum", href: "/imprint" },
        { label: "Datenschutz", href: "/privacy" },
        { label: "Nutzungsbedingungen", href: "/terms" },
    ];

    return (
        <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">

                {/* Top */}
                <div className="grid gap-14 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

                    {/* Brand */}
                    <div>
                        <p className="text-2xl font-black uppercase tracking-tight italic">
                            TRYBES
                        </p>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                            Multiplayer Cycling Experience. TRYBES verwandelt reale Bewegung
                            in Progression, Competition und echtes Teamplay.
                        </p>

                        <div className="mt-7">
                            <a
                                href="mailto:hello@trybes.app"
                                className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b7922f] transition hover:text-white"
                            >
                                hello@trybes.app
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b7922f]">
                            Navigation
                        </p>

                        <nav className="mt-6 flex flex-col gap-4">
                            {navigation.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b7922f]">
                            Legal
                        </p>

                        <div className="mt-6 flex flex-col gap-4">
                            {legal.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} TRYBES</p>
                    <p>Game-first. Team-based. Real movement.</p>
                </div>
            </div>
        </footer>
    );
}