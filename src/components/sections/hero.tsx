import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
                <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
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
                    <div className="relative flex items-start justify-center lg:justify-end">
                        <Image
                            src="/images/hero/Trybe-11.png"
                            alt="TRYBES Rider"
                            width={280}
                            height={420}
                            className="h-auto w-full max-w-[160px] object-contain sm:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}