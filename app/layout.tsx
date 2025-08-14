import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./_components/SmoothScrollProvider";
import Navbar from "./_layouts/Navbar";
import Footer from "./_layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 Ryan",
  description: "Personal Portfolio of 404 Ryan, a web developer from Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer/>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
