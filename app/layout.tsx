import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./compont/Navbar/Navbar";

const inter = Poppins({ subsets: ["latin"],weight:["100","300","500"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "it is have my works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
