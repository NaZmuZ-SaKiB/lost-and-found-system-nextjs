"use server";

export const createLostItem = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`
  );
};
