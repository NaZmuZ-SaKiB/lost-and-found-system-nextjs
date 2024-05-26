"use client";

import { Button } from "@/components/ui/button";
import { useToggleUserRoleMutation } from "@/redux/api/user.api";

type TProps = { userId: string; role: "USER" | "ADMIN" };

const ToggleUserRole = ({ role, userId }: TProps) => {
  const newRole = role === "ADMIN" ? "USER" : "ADMIN";

  const [toggleRole, { isLoading }] = useToggleUserRoleMutation();

  const color = newRole === "ADMIN" ? "bg-red-600 hover:bg-red-600" : "";

  return (
    <Button
      size="sm"
      className={`capitalize text-white ${color}`}
      onClick={() => toggleRole(userId)}
      disabled={isLoading}
    >
      {!isLoading ? `Make ${newRole.toLowerCase()}` : "Updating..."}
    </Button>
  );
};

export default ToggleUserRole;
