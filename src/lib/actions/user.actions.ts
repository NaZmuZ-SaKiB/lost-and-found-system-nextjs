"use server";

import { z } from "zod";
import { UpdateProfileValidation } from "../validations/user.validation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { Tags } from "@/constants";

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

  revalidateTag(Tags.USER);

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
      next: {
        tags: [Tags.DASHBOARD],
      },
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

export const getAllUsers = async (query: Record<string, any>) => {
  const params = new URLSearchParams(query);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api?${params.toString()}`,
    {
      headers: {
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-store",
      next: {
        tags: [Tags.USER],
      },
    }
  );

  const result = await res.json();

  if (result?.success) {
    return {
      users: result?.data,
      meta: result?.meta,
    };
  } else {
    return {
      users: [],
      meta: {},
    };
  }
};

export const updateUserStatus = async (data: {
  id: string;
  data: { status: string };
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/change-status/${data?.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      body: JSON.stringify(data.data),
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.USER);
  revalidateTag(Tags.DASHBOARD);

  return result;
};

export const toggleUserRole = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/toggle-role/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")?.value as string,
      },
      cache: "no-cache",
    }
  );

  const result = await res.json();

  revalidateTag(Tags.USER);

  return result;
};
