import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-24">

                {/* Grid Layout */}
                <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT: Text */}
                    <div className="max-w-4xl">

                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7922f]">
                            Game-first. Team-based. Real movement.
                        </p>

                        <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
                            Dein Bike ist
                            <span className="block">der Controller.</span>
                        </h1>

                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#5a5a5a] sm:text-xl">
                            TRYBES macht aus Bewegung ein Multiplayer-Spiel. Jeder Ride bringt
                            Fortschritt, jede Mission zählt für dein Team und aus Training wird
                            endlich ein echtes Erlebnis.
                        </p>

                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative flex items-center justify-center lg:justify-end">

                        <Image
                            src="/images/hero/Trybe-11.png"
                            alt="TRYBES Rider"
                            width={400}
                            height={600}
                            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[260px] lg:max-w-[300px] xl:max-w-[320px] lg:-translate-y-8 xl:-translate-y-12 lg:translate-x-4 xl:translate-x-8"
                            priority
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}