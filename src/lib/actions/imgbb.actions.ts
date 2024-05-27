export const uploadImage = async (image: any) => {
  const formData = new FormData();
  formData.append("image", image);

  const params = new URLSearchParams({
    key: process.env.NEXT_PUBLIC_IMGBB_API_KEY as string,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_IMGBB_UPLOAD_URL}?${params}`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  const result = await res.json();
  console.log("result", result);

  if (result.success) {
    return result?.data?.url;
  } else {
    return null;
  }
};
