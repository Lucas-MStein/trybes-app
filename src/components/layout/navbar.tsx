"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { label: "Features", href: "#features", id: "features" },
        { label: "How it works", href: "#how-it-works", id: "how-it-works" },
    ];

    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8);

            const sections = links
                .map((link) => document.getElementById(link.id))
                .filter(Boolean) as HTMLElement[];

            const scrollPosition = window.scrollY + 140;

            for (const section of sections) {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(section.id);
                    return;
                }
            }

            setActiveSection("");
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full">
            <div
                className={`border-b border-black/5 bg-[#efefef]/80 backdrop-blur-xl transition-all duration-300 ${
                    scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.06)]" : ""
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">

                    {/* Logo */}
                    <a
                        href="#top"
                        className="flex items-center"
                        onClick={handleClose}
                        aria-label="Zur Startseite"
                    >
                        <Image
                            src="/images/logos/trybes-logo.png"
                            alt="TRYBES"
                            width={180}
                            height={40}
                            className="h-7 w-auto object-contain"
                            priority
                        />
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-10 md:flex">
                        {links.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-semibold uppercase tracking-[0.14em] transition ${
                                        isActive
                                            ? "text-[#111111]"
                                            : "text-[#7a7a7a] hover:text-[#111111]"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="#cta"
                        className="hidden items-center justify-center rounded-full bg-[#111111] px-6 py-3.5 transition hover:bg-black md:inline-flex"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                            Early Access sichern
                        </span>
                    </a>

                    {/* Mobile menu button */}
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

                {/* Mobile menu */}
                <div
                    className={`overflow-hidden border-t border-black/5 bg-[#efefef]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                        open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-6 py-6">
                        <nav className="flex flex-col gap-2">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleClose}
                                    className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#111111] transition hover:bg-white/80"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-6">
                            <a
                                href="#cta"
                                onClick={handleClose}
                                className="inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-4 transition hover:bg-black"
                            >
                                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
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