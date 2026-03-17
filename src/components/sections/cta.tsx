"use client";

import { FormEvent, useState } from "react";
import { Section } from "@/components/layout/section";

export function CTA() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/early-access", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Die Anmeldung hat nicht funktioniert.");
            }

            setStatus("success");
            setMessage("Danke! Du bist jetzt auf der Early-Access-Liste.");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Die Anmeldung konnte nicht abgeschlossen werden."
            );
        }
    }

    return (
        <Section id="cta" tone="dark">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                    Join the movement
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl text-white">
                    Dein nächster Ride
                    <span className="block">könnte eine Mission sein.</span>
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/70 sm:text-xl">
                    Werde Teil der ersten TRYBES Riders und begleite den Start von
                    Game-first Cycling.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row"
                >
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Deine E-Mail-Adresse"
                        required
                        className="h-14 flex-1 rounded-full border border-white/15 bg-white/10 px-6 text-base text-white outline-none transition placeholder:text-white/40 focus:border-[#b7922f]"
                    />

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === "loading" ? "Wird gesendet..." : "Early Access sichern"}
                    </button>
                </form>

                {message ? (
                    <p
                        className={`mt-5 text-sm ${
                            status === "success" ? "text-[#b7922f]" : "text-red-400"
                        }`}
                    >
                        {message}
                    </p>
                ) : null}

                <p className="mt-4 text-sm text-white/40">
                    Kein Spam. Nur Updates zum Launch und zum Produkt.
                </p>
            </div>
        </Section>
    );
}