"use client";

import CustomDatePicker from "@/components/Form/CustomDatePicker";
import CustomSelect from "@/components/Form/CustomSelect";
import ImageUploadButton from "@/components/Form/ImageUploadButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { uploadImage } from "@/lib/actions/imgbb.actions";
import { createLostItem } from "@/lib/actions/lostItem.action";
import { LostItemCreateValidation } from "@/lib/validations/lostItem.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TProps = {
  categories: any[];
};

const LostItemForm = ({ categories }: TProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<null | string>(null);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LostItemCreateValidation),
    defaultValues: {
      categoryId: "",
      brand: "",
      lostItemName: "",
      description: "",
      location: "",
      lostDate: new Date().toISOString(),
      contactNo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LostItemCreateValidation>) => {
    try {
      let data: any = { ...values };
      let imgUrl: any = null;

      if (image) {
        imgUrl = await uploadImage(image);
        data.image = imgUrl;
      }

      const result = await createLostItem(data);
      if (result.success) {
        toast.success("Lost item reported successfully");
        form.reset();
        router.push(`/lost-item/${result?.data?.id}`);
      } else {
        toast.error("Failed to report lost item");
      }
    } catch (error: any) {
      toast.error("Failed to report lost item");
    }
  };

  const categoryOptions =
    categories?.map((category: any) => ({
      label: category.name,
      value: category.id,
    })) || [];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-5 max-sm:gap-6"
      >
        <ImageUploadButton
          image={image}
          imageSrc={imageSrc}
          setImage={setImage}
          setImageSrc={setImageSrc}
        />

        <div className="flex gap-5 max-sm:flex-col">
          <CustomSelect
            name="categoryId"
            label="Category"
            control={form.control}
            items={categoryOptions}
          />

          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Brand" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-5 max-sm:flex-col">
          <FormField
            control={form.control}
            name="lostItemName"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Lost Item Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Lost Item Name" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactNo"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Contact No</FormLabel>
                <FormControl>
                  <Input placeholder="Contact No" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel className="">Description*</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-5 max-sm:flex-col">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Where it was lost ?*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Where it was lost ?"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <CustomDatePicker
            name="lostDate"
            label="Lost Date"
            control={form.control}
          />
        </div>
        <Button
          className={`bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:animate-pulse`}
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {!form.formState.isSubmitting ? "Submit" : "Submiting..."}
        </Button>
      </form>
    </Form>
  );
};

export default LostItemForm;
