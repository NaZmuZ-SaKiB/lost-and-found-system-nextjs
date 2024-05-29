"use client";

import { Button } from "@/components/ui/button";
import { toggleUserRole } from "@/lib/actions/user.actions";
import { useState } from "react";
import { toast } from "sonner";

type TProps = { userId: string; role: "USER" | "ADMIN" };

const ToggleUserRole = ({ role, userId }: TProps) => {
  const [loading, setLoading] = useState(false);

  const newRole = role === "ADMIN" ? "USER" : "ADMIN";

  const color = newRole === "ADMIN" ? "bg-red-600 hover:bg-red-600" : "";

  const handleToggleRole = async () => {
    setLoading(true);

    try {
      const result = await toggleUserRole(userId);

      if (result?.success) {
        toast.success("User role changed.");
      } else {
        toast.error(result?.message || "Failed to change role.");
      }
    } catch (error: any) {
      toast.error("Faild to change role.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      className={`capitalize text-white ${color}`}
      onClick={handleToggleRole}
      disabled={loading}
    >
      {!loading ? `Make ${newRole.toLowerCase()}` : "Updating..."}
    </Button>
  );
};

export default ToggleUserRole;
