"use server";

import { z } from "zod";
import { ClaimValidation } from "../validations/claim.validation";
import { cookies } from "next/headers";
import axios from "axios";
import { ClaimStatusEnum } from "@/constants";

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

export const getAllClaims = async (query?: Record<string, any>) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/claims`,
    {
      params: query || {},
      validateStatus: (_) => true,
    }
  );

  const result = res.data;

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

  return await res.json();
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
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  return await res.json();
};
