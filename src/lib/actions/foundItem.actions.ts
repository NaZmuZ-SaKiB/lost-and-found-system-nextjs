"use server";

import { Tags } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createFoundItem = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items`,
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

  revalidateTag(Tags.FOUND_ITEM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};

export const getAllFoundItems = async (query?: Record<string, any>) => {
  const params = new URLSearchParams(query);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/found-items?${params.toString()}`,
    {
      cache: "no-store",
      next: {
        tags: [Tags.FOUND_ITEM],
      },
    }
  );

  const result = await res.json();

  return result;
};

export const getFoundItemById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: {
        tags: [Tags.FOUND_ITEM],
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

export const isFoundItemClaimedByMe = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items/is-claimed/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
      next: {
        tags: [Tags.FOUND_ITEM, Tags.CLAIM],
      },
    }
  );

  const result = await res.json();

  if (result.success) {
    return result?.data?.claimed || false;
  } else {
    return false;
  }
};

export const deleteFoundItem = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.FOUND_ITEM);
  revalidateTag(Tags.DASHBOARD);

  return result;
};
