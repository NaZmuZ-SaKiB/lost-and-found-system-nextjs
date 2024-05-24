"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

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

  cookies().set("jwt", result.token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

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

  cookies().set("jwt", result.token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  return result;
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
      }
    );

    return await res.json();
  } catch (error: any) {
    redirect("/");
  }
};

type TJwtPayload = { id: string; email: string; role: "ADMIN" | "USER" };

export const isUserLoggedIn = (): TJwtPayload | null => {
  try {
    const token = cookies().get("jwt");
    if (!token?.value) return null;

    const decoded = jwt.verify(token.value, process.env.TOKEN_SECRET as string);

    return decoded as TJwtPayload;
  } catch (error: any) {
    return null;
  }
};
