"use client";

import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Features", href: "#features" },
        { label: "So funktioniert’s", href: "#how-it-works" },
        { label: "Validierung", href: "#validation" },
        { label: "Roadmap", href: "#roadmap" },
    ];

    const handleClose = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="border-b border-black/5 bg-[#efefef]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                    <a
                        href="#top"
                        className="text-xl font-black uppercase tracking-tight italic text-[#111111]"
                        onClick={handleClose}
                    >
                        TRYBES
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4d4d4d] transition hover:text-[#111111]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#cta"
                        className="hidden items-center justify-center rounded-full bg-[#111111] px-5 py-3 transition hover:bg-black md:inline-flex"
                    >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Early Access sichern
            </span>
                    </a>

                    <button
                        type="button"
                        aria-label="Menü öffnen"
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111111] transition hover:bg-white md:hidden"
                    >
                        <div className="flex flex-col gap-1.5">
              <span
                  className={`block h-[2px] w-5 bg-[#111111] transition ${
                      open ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />
                            <span
                                className={`block h-[2px] w-5 bg-[#111111] transition ${
                                    open ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-[2px] w-5 bg-[#111111] transition ${
                                    open ? "-translate-y-[7px] -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>

                <div
                    className={`overflow-hidden border-t border-black/5 bg-[#efefef]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                        open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-6 py-5">
                        <nav className="flex flex-col gap-2">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleClose}
                                    className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] transition hover:bg-white/80"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-4">
                            <a
                                href="#cta"
                                onClick={handleClose}
                                className="inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-4 transition hover:bg-black"
                            >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  Early Access sichern
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}