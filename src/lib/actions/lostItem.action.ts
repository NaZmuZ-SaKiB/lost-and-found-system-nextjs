"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const createLostItem = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );

  revalidatePath("/");

  return await res.json();
};

export const getAllLostItems = async (query: Record<string, any>) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items`,
    {
      params: query,
    }
  );

  const result = res.data;
  if (result.success) {
    return result.data;
  } else {
    return [];
  }
};
