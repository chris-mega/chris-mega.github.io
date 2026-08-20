import "../globals.css";

import Navbar from "./Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ routing, children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col w-full min-h-screen`}
    >
      <Navbar routing={routing} />
      {/* w-full + flex-1: without this, `main` shrink-wrapped its content and
          every full-bleed section stopped short of the viewport edges. */}
      <main className="w-full flex-1 pt-16">{children}</main>
    </div>
  );
}
