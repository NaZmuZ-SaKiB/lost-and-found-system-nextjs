"use client";

import { Button } from "@/components/ui/button";
import { updateUserStatus } from "@/lib/actions/user.actions";
import { useState } from "react";
import { toast } from "sonner";

type TProps = { userId: string; status: "ACTIVE" | "INACTIVE" };

const ChangeUserStatus = ({ userId, status }: TProps) => {
  const [loading, setLoading] = useState(false);

  const newStatus = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

  const updateData = {
    id: userId,
    data: { status: newStatus },
  };

  const color =
    status === "ACTIVE"
      ? "bg-red-600 hover:bg-red-600"
      : "bg-green-600 hover:bg-green-600";

  const handleStatusChange = async () => {
    setLoading(true);

    try {
      const result = await updateUserStatus(updateData);

      if (result?.success) {
        toast.success("User status changed.");
      } else {
        toast.error(result?.message || "Failed to change status.");
      }
    } catch (error: any) {
      toast.error("Faild to change status.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      size="sm"
      className={`capitalize text-white ${color}`}
      onClick={handleStatusChange}
      disabled={loading}
    >
      {!loading ? newStatus.toLowerCase() : "Updating..."}
    </Button>
  );
};

export default ChangeUserStatus;
