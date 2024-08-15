"use client";

import { signOutAction } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOutAction();
      router.push("/");
    } catch (error: any) {}
  };
  return (
    <div className="w-full" onClick={handleLogout}>
      logout
    </div>
  );
};

export default LogoutButton;
