import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

import DashboardNavbar from "@/components/Layout/DashboardNavbar";
import DashboardSidebar from "@/components/Layout/DashboardSidebar";

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardNavbar role={user.role} />
        <div className="flex">
          <DashboardSidebar role={user.role} />
          <div className="h-svh flex-1 overflow-y-auto pt-12 bg-slate-200/60">
            {children}
          </div>
        </div>
        <Toaster position="bottom-right" closeButton richColors />
      </body>
    </html>
  );
}
