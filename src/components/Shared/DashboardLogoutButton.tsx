"use client";

import { signOutAction } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

const DashboardLogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOutAction();
      redirect("/");
    } catch (error: any) {}
  };
  return (
    <div className="w-full" onClick={handleLogout}>
      logout
    </div>
  );
};

export default DashboardLogoutButton;
