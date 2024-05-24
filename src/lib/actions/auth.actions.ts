"use server";

import { cookies } from "next/headers";

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
