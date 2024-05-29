"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { Tags } from "@/constants";

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

  const result = await res.json();

  revalidateTag(Tags.LOST_ITEM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};

export const getAllLostItems = async (query?: Record<string, any>) => {
  const params = new URLSearchParams(query);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/lost-items?${params.toString()}`,
    {
      cache: "no-store",
      next: {
        tags: [Tags.LOST_ITEM],
      },
    }
  );

  const result = await res.json();
  return result;
};

export const getLostItemById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: {
        tags: [Tags.LOST_ITEM],
      },
    }
  );

  const result = await res.json();

  if (result.success) {
    return result.data;
  } else {
    return null;
  }
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

  const result = await res.json();

  revalidateTag(Tags.LOST_ITEM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};

export const markAsFound = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lost-items/mark-found/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.LOST_ITEM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};
