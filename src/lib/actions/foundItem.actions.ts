"use server";

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

  return await res.json();
};

export const getAllFoundItems = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  if (result.success) {
    return result.data;
  } else {
    return [];
  }
};

export const getAllFoundItemById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/found-items/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  if (result.success) {
    return result.data;
  } else {
    return [];
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
    }
  );

  const result = await res.json();

  if (result.success) {
    return result?.data?.claimed || false;
  } else {
    return false;
  }
};
