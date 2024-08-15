import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

import AdminNavbar from "@/components/Layout/AdminNavbar";
import AdminSidebar from "@/components/Layout/AdminSidebar";

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
    <html lang="en">
      <body className={inter.className}>
        <AdminNavbar />
        <div className="flex">
          <AdminSidebar />
          <div className="h-svh flex-1 overflow-y-auto pt-12 bg-slate-200/60">
            {children}
          </div>
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
