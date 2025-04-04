import "../globals.css";

import Navbar from './Navbar'
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
    <div className={`${geistSans.variable} ${geistMono.variable} flex flex-col w-full h-screen items-center`}>
      <Navbar routing={routing} />
      <main>{children}</main>
    </div>
  )
}
