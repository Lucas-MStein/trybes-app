import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://trybes.app"),

    title: {
        default: "TRYBES",
        template: "%s | TRYBES",
    },

    description:
        "TRYBES macht aus Bewegung ein Multiplayer-Spiel. Dein Bike wird zum Controller – mit Progression, Teamplay und Competition.",

    applicationName: "TRYBES",

    keywords: [
        "TRYBES",
        "cycling app",
        "multiplayer cycling game",
        "fitness gamification",
        "bike game",
        "cycling motivation",
        "team cycling",
        "indoor cycling",
        "outdoor cycling",
    ],

    authors: [{ name: "TRYBES" }],
    creator: "TRYBES",
    publisher: "TRYBES",

    alternates: {
        canonical: "/",
    },

    icons: {
        icon: "/favicons/trybes-favicon.png",
        shortcut: "/favicons/trybes-favicon.png",
        apple: "/favicons/trybes-favicon.png",
    },

    openGraph: {
        type: "website",
        locale: "de_DE",
        url: "https://trybes.app",
        siteName: "TRYBES",
        title: "TRYBES",
        description:
            "TRYBES macht aus Bewegung ein Multiplayer-Spiel. Dein Bike wird zum Controller – mit Progression, Teamplay und Competition.",
        images: [
            {
                url: "/images/og/trybes-og.jpg",
                width: 1200,
                height: 630,
                alt: "TRYBES – Dein Bike ist der Controller",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "TRYBES",
        description:
            "TRYBES macht aus Bewegung ein Multiplayer-Spiel. Dein Bike wird zum Controller – mit Progression, Teamplay und Competition.",
        images: ["/images/og/trybes-og.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
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