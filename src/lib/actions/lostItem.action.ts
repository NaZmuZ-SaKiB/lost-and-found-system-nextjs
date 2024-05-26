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

export const getAllLostItems = async (query?: Record<string, any>) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items`,
    {
      params: query || {},
      validateStatus: (_) => true,
    }
  );

  const result = res.data;
  return result;
};

export const deleteLostItem = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items/${id}`,
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

export const markAsFound = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mark-found/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  return await res.json();
};
