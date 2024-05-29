"use server";

import { z } from "zod";
import { ClaimValidation } from "../validations/claim.validation";
import { cookies } from "next/headers";
import { ClaimStatusEnum, Tags } from "@/constants";
import { revalidateTag } from "next/cache";

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

  const result = await res.json();

  revalidateTag(Tags.CLAIM);
  revalidateTag(Tags.DASHBOARD);
  return result;
};

export const getAllClaims = async (query?: Record<string, any>) => {
  const params = new URLSearchParams(query);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claims?${params.toString()}`,
    {
      cache: "no-store",
      next: {
        tags: [Tags.CLAIM],
      },
    }
  );

  const result = await res.json();

  return result;
};

export const deleteClaim = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claims/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.CLAIM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};

export const updateStatus = async (id: string, data: { status: string }) => {
  if (!Object.values(ClaimStatusEnum).includes(data.status)) {
    return;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claims/status/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();
  revalidateTag(Tags.CLAIM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};
