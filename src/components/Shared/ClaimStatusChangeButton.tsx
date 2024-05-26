"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateStatus } from "@/lib/actions/claim.actions";

type TProps = {
  type: "APPROVED" | "REJECTED";
  claimId: string;
};

const ClaimStatusChangeButton = ({ type, claimId }: TProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const result = await updateStatus(claimId, { status: type });
      if (result.success) {
        toast.success(`Claim ${type} successfully.`);
        router.refresh();
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(`Failed to ${type} Claim`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {type === "APPROVED" ? (
        <Button
          disabled={loading}
          variant="outline"
          size="sm"
          className={`border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50 flex-1`}
          onClick={handleUpdate}
        >
          {loading ? "Updating..." : "Approve"}
        </Button>
      ) : (
        <Button
          disabled={loading}
          variant="outline"
          size="sm"
          className={`border-red-600 text-red-600 hover:text-red-600 hover:bg-red-50 flex-1`}
          onClick={handleUpdate}
        >
          {loading ? "Updating..." : "Reject"}
        </Button>
      )}
    </>
  );
};

export default ClaimStatusChangeButton;
