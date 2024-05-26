"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { deleteFoundItem } from "@/lib/actions/foundItem.actions";
import { toast } from "sonner";
import { useState } from "react";

const FoundItemCardDeleteButton = ({
  foundItemId,
}: {
  foundItemId: string;
}) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deleteFoundItem(foundItemId);
      if (result.success) {
        toast.success("Found Item Deleted");
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

export default FoundItemCardDeleteButton;
