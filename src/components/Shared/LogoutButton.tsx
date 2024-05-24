"use client";

import { signOutAction } from "@/lib/actions/auth.actions";
import { Button } from "../ui/button";
import { toast } from "sonner";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOutAction();
      toast.success("Logged out");
    } catch (error: any) {
      toast(error?.message || "Failed to log out");
    }
  };
  return (
    <Button
      variant="outline"
      className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
      onClick={handleLogout}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
