export default function ImprintPage() {
    return (
        <main className="min-h-screen bg-[#efefef] text-[#111111]">
            <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
                <h1 className="text-4xl font-black uppercase tracking-tight">
                    Imprint
                </h1>

                <div className="mt-10 space-y-8 text-lg leading-8 text-[#4d4d4d]">
                    <p>
                        This is a placeholder imprint page for the TRYBES project.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-[#111111]">
                            Responsible for the content
                        </h2>

                        <p className="mt-2">
                            TRYBES Project Team
                            <br />
                            DHBW Mosbach
                            <br />
                            Germany
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#111111]">Contact</h2>

                        <p className="mt-2">
                            Email: hello@trybes.app
                        </p>
                    </div>

                    <p className="text-sm text-[#6b6b6b]">
                        This page is a placeholder and will be updated with the final legal
                        information before public launch.
                    </p>
                </div>
            </div>
        </main>
    );
}