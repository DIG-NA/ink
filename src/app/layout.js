"use client";
import { Geist, Geist_Mono, Inter, Amiri } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-inter" });
const amiri = Amiri({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-amiri" });

export default function RootLayout({ children }) {

  const [theme, setTheme] = useState("light");

  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${amiri.variable} antialiased`}>

        <div className="container">
          <header className="topbar">
            <Link href="/" className="logo">ink</Link>
            <button className="btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙" : "☀️"}</button>
          </header>
          <main>
            <article>{children}</article>
          </main>
        </div>

      </body>
    </html>
  );
}
