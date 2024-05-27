"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ChangeEvent, useRef } from "react";

type TProps = {
  image: File | null;
  imageSrc: string | null;
  setImage: any;
  setImageSrc: any;
};

const ImageUploadButton = ({
  image,
  imageSrc,
  setImage,
  setImageSrc,
}: TProps) => {
  const imgInputRef = useRef<HTMLInputElement>(null);

  const removeImage = () => {
    setImage(null);
    setImageSrc(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setImage(null);
    setImageSrc(null);

    const fileReader = new FileReader();

    if (e.target?.files?.length) {
      const file = e.target.files[0];

      if (!file.type.includes("image")) return;

      setImage(file);

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        setImageSrc(imageDataUrl);
      };

      // When read is completed then the above onload executes
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`flex ${
        imageSrc ? "justify-center" : "justify-end"
      } items-center gap-3 max-sm:flex-col mb-3`}
    >
      {imageSrc && (
        <div className="relative size-[200px]">
          <Image
            src={imageSrc}
            fill
            className="object-cover object-center"
            alt="selected image"
          />
        </div>
      )}
      <div className="flex gap-3 justify-end">
        <Button
          type="button"
          size="sm"
          className="bg-pink-500 hover:bg-pink-600"
          onClick={() => imgInputRef.current?.click()}
        >
          {image ? "Change" : "Add"} Image
        </Button>
        {image && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
            onClick={removeImage}
          >
            remove Image
          </Button>
        )}
        <input
          hidden
          onChange={handleImageChange}
          ref={imgInputRef}
          type="file"
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default ImageUploadButton;
