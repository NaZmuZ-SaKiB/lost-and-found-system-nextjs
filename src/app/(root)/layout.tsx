import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lost and Found",
  description:
    "Lost something? Found an item? Our platform connects people who have lost items with those who have found them. Report lost items, search found items, and reunite with your belongings quickly and easily. Join our community today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </>
      </body>
    </html>
  );
}
