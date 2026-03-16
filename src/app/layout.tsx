import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    title: "TRYBES",
    description: "Multiplayer Cycling Game",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <body className="bg-[#efefef] text-[#111111]">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}