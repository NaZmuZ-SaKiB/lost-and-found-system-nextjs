"use client";

import { deleteClaim } from "@/lib/actions/claim.actions";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ClaimCardDeleteButton = ({ claimId }: { claimId: string }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deleteClaim(claimId);
      if (result.success) {
        toast.success("Claim Deleted");
        router.refresh();
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error("Failed to delete");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      variant="destructive"
      size="sm"
      onClick={handleDelete}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default ClaimCardDeleteButton;
