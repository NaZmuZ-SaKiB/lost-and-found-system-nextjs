"use server";

import { z } from "zod";
import { UpdateProfileValidation } from "../validations/user.validation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateUser = async (
  data: z.infer<typeof UpdateProfileValidation>
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-profile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidatePath("/my-profile");

  return result;
};

export const getDashboardData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard-data`,
    {
      method: "GET",
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  if (result.success) {
    return result.data;
  } else {
    return {
      userCount: 0,
      lostItemCount: 0,
      foundItemCount: 0,
      returnedItemCount: 0,
      claimCount: 0,
    };
  }
};
