"use client";

import { deleteLostItem } from "@/lib/actions/lostItem.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useState } from "react";

const LostItemCardDeleteButton = ({ lostItemId }: { lostItemId: string }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    try {
      const result = await deleteLostItem(lostItemId);
      if (result.success) {
        toast.success("Lost Item Deleted");
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

export default LostItemCardDeleteButton;
