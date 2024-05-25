"use client";

import { deleteClaim } from "@/lib/actions/claim.actions";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ClaimCardDeleteButton = ({ claimId }: { claimId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
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
    }
  };
  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default ClaimCardDeleteButton;
