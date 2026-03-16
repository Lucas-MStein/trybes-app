import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TRYBES",
    description: "TRYBES website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body>{children}</body>
        </html>
    );
}