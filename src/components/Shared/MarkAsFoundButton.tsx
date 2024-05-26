"use client";

import { markAsFound } from "@/lib/actions/lostItem.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type TProps = { lostItemId: string; found: boolean };

const MarkAsFoundButton = ({ lostItemId, found }: TProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const result = await markAsFound(lostItemId);
      if (result.success) {
        toast.success("Marked as found.");
        router.refresh();
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error("Failed to mark as found");
    } finally {
      setLoading(false);
    }
  };

  if (found) {
    return (
      <Button size="sm" className="bg-green-600 text-white hover:bg-green-600 ">
        Founded
      </Button>
    );
  }

  return (
    <Button
      disabled={loading}
      variant="outline"
      size="sm"
      className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50"
      onClick={handleUpdate}
    >
      {loading ? "Updating..." : "Mark Found"}
    </Button>
  );
};

export default MarkAsFoundButton;
