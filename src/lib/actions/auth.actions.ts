"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { ChangePasswordValidation } from "../validations/auth.validation";
import { revalidateTag } from "next/cache";
import { Tags } from "@/constants";

export const signUpAction = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const result = await res.json();

  if (result.success) {
    cookies().set("jwt", result.data.token, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "none",
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
  }

  revalidateTag(Tags.USER);

  return result;
};

export const signInAction = async (email: string, password: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const result = await res.json();

  if (result.success) {
    cookies().set("jwt", result.data.token, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
  }

  revalidateTag(Tags.USER);

  return result;
};

export const signOutAction = async () => {
  cookies().delete("jwt");
  redirect("/");
};

export const currentUser = async () => {
  try {
    const token = cookies().get("jwt");
    if (!token?.value) redirect("/");

    jwt.verify(token.value, process.env.TOKEN_SECRET as string);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-profile`,
      {
        method: "GET",
        headers: {
          Authorization: cookies().get("jwt")!.value,
        },
        cache: "no-store",
        next: {
          tags: [Tags.USER],
        },
      }
    );

    const result = await res.json();
    return result.data;
  } catch (error: any) {
    return null;
  }
};

export const changePassword = async (
  data: z.infer<typeof ChangePasswordValidation>
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/change-password`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies().get("jwt")!.value,
      },
      cache: "no-store",
    }
  );

  const result = await res.json();

  if (result.success) {
    cookies().delete("jwt");
  }
  return result;
};

type TJwtPayload = { id: string; email: string; role: "ADMIN" | "USER" };

export const isUserLoggedIn = async () => {
  try {
    const token = cookies().get("jwt");
    if (!token?.value) return null;

    const decoded = await jwt.verify(
      token.value,
      process.env.TOKEN_SECRET as string
    );

    return decoded as TJwtPayload;
  } catch (error: any) {
    return null;
  }
};
