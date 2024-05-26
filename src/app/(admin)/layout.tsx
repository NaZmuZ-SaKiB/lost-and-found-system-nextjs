import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Providers";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import Navbar from "@/components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lost and Found",
  description:
    "Lost something? Found an item? Our platform connects people who have lost items with those who have found them. Report lost items, search found items, and reunite with your belongings quickly and easily. Join our community today!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await isUserLoggedIn();

  if (!user?.id) {
    redirect("/sign-in");
  }

  if (user?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            <Navbar />
            {children}

            <Toaster position="top-center" />
          </>
        </body>
      </html>
    </Providers>
  );
}