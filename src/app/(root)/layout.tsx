import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "sonner";
import MobileNav from "@/components/Layout/MobileNav";
import { BottomBarItems } from "@/constants";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          inter.className,
          "w-[100vw] overflow-x-hidden scrollbar-thin scrollbar-webkit"
        )}
      >
        <>
          <Navbar />
          <div className="pt-10 sm:pt-16 md:pt-20">{children}</div>
          <MobileNav items={BottomBarItems} />
          <Footer />
          <Toaster position="bottom-right" />
        </>
      </body>
    </html>
  );
}
