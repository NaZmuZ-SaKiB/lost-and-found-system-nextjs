"use server";

import { z } from "zod";
import { ClaimValidation } from "../validations/claim.validation";
import { cookies } from "next/headers";

export const createClaim = async (data: z.infer<typeof ClaimValidation>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies().get("jwt")?.value as string,
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });

  return await res.json();
};
