"use server";

import { Tags } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
    {
      cache: "no-store",
      next: {
        tags: [Tags.CATEGORY],
      },
    }
  );

  const result = await res.json();

  if (result?.success) {
    return result?.data;
  } else {
    return [];
  }
};

export const createCategory = async (data: { name: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.CATEGORY);

  return result;
};
