import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Suspense} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Basket of Life | Smart Eco-Friendly Packaging for Fresh Produce",
    description:
        "Basket of Life is a Jordanian startup creating sustainable, science-based smart packaging that preserves fresh produce, reduces food waste, and supports farmers.",
    keywords:
        "Basket of Life, smart packaging Jordan, eco-friendly agricultural solutions, fresh produce preservation, reduce food waste, sustainable agriculture technology, post-harvest solutions, smart agricultural packaging, Jordan agritech startup, farmers export solutions",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Suspense fallback={null}>{children}</Suspense>
        </body>
        </html>
    );
}
