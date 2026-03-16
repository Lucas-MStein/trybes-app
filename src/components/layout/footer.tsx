export function Footer() {
    const navigation = [
        { label: "Features", href: "#features" },
        { label: "So funktioniert’s", href: "#how-it-works" },
        { label: "Validierung", href: "#validation" },
        { label: "Roadmap", href: "#roadmap" },
    ];

    const legal = [
        { label: "Impressum", href: "/imprint" },
        { label: "Datenschutz", href: "/privacy" },
        { label: "Nutzungsbedingungen", href: "/terms" },
    ];

    return (
        <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
                <div className="grid gap-12 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">

                    {/* Brand */}
                    <div>
                        <p className="text-2xl font-black uppercase tracking-tight italic">
                            TRYBES
                        </p>

                        <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                            TRYBES verwandelt reale Bewegung in Progression, Teamplay
                            und ein echtes Spielerlebnis auf dem Bike.
                        </p>

                        <div className="mt-6">
                            <a
                                href="mailto:hello@trybes.app"
                                className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b7922f] transition hover:text-white"
                            >
                                hello@trybes.app
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                            Navigation
                        </p>

                        <nav className="mt-5 flex flex-col gap-3">
                            {navigation.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.08em] text-white/75 transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b7922f]">
                            Legal
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {legal.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.08em] text-white/75 transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-4 pt-6 text-xs uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} TRYBES</p>
                    <p>Game-first. Team-based. Real movement.</p>
                </div>
            </div>
        </footer>
    );
}