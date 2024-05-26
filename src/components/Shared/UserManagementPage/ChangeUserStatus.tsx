"use client";

import { Button } from "@/components/ui/button";
import { useUpdateUserStatusMutation } from "@/redux/api/user.api";

type TProps = { userId: string; status: "ACTIVE" | "INACTIVE" };

const ChangeUserStatus = ({ userId, status }: TProps) => {
  const newStatus = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

  const [changeStatus, { isLoading }] = useUpdateUserStatusMutation();

  const updateData = {
    id: userId,
    data: { status: newStatus },
  };

  const color =
    status === "ACTIVE"
      ? "bg-red-600 hover:bg-red-600"
      : "bg-green-600 hover:bg-green-600";
  return (
    <Button
      size="sm"
      className={`capitalize text-white ${color}`}
      onClick={() => changeStatus(updateData)}
      disabled={isLoading}
    >
      {!isLoading ? newStatus.toLowerCase() : "Updating..."}
    </Button>
  );
};

export default ChangeUserStatus;
