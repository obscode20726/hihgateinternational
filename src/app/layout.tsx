import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

const lexend = Lexend({
    subsets: ["latin"],
    display: "swap",
});

const varela = Varela_Round({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

// Note: Verdana is a system font, so we don't need to import it
// We can use the font-verdana class from our Tailwind config

export const metadata: Metadata = {
    title: "Highgateintenational",
    description: "website for Highgateintenational",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${lexend.className} ${varela.className} font-sans antialiased text-white`}
            >
                {children}
            </body>
        </html>
    );
}
