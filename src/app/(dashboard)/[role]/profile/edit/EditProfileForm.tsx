"use client";

import ImageUploadButton from "@/components/Form/ImageUploadButton";
import { uploadImage } from "@/lib/actions/imgbb.actions";
import { updateUser } from "@/lib/actions/user.actions";
import { UpdateProfileValidation } from "@/lib/validations/user.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
import { Button } from "@/components/ui/button";

type TProps = {
  name: string;
  email: string;
  age?: number;
  contactNo: string;
  bio?: string;
  image?: string;
  jobTitle?: string;
  location?: string;
  interests?: string;
  aboutMe?: string;
};

const EditProfileForm = ({
  name,
  email,
  age,
  contactNo,
  bio,
  jobTitle,
  location,
  interests,
  aboutMe,
  image: oldImage,
}: TProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(oldImage || null);

  const form = useForm({
    resolver: zodResolver(UpdateProfileValidation),
    defaultValues: {
      email: email || "",
      profile: {
        name: name || "",
        jobTitle: jobTitle || "",
        age: age || 0,
        contactNo: contactNo || "",
        bio: bio || "",
        location: location || "",
        interests: interests || "",
        aboutMe: aboutMe || "",
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof UpdateProfileValidation>) => {
    try {
      let data: any = { ...values };
      let imgUrl: any = null;

      if (image) {
        imgUrl = await uploadImage(image);
        data.profile.image = imgUrl;
      }

      const result = await updateUser(data);
      if (result.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to update profile");
    }
  };
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
          title="Update Profile"
        />

        <div className="flex gap-3 flex-wrap [&>*]:flex-1 [&>*]:basis-[300px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profile.name"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-3 flex-wrap [&>*]:flex-1 [&>*]:basis-[300px]">
          <FormField
            control={form.control}
            name="profile.jobTitle"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Job Title" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profile.age"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Age</FormLabel>
                <FormControl>
                  <Input placeholder="Age" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-3 flex-wrap [&>*]:flex-1 [&>*]:basis-[300px]">
          <FormField
            control={form.control}
            name="profile.contactNo"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Contact No</FormLabel>
                <FormControl>
                  <Input placeholder="Contact No" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profile.location"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="">Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="profile.interests"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="">Interests</FormLabel>
              <FormControl>
                <Input placeholder="Interests" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.bio"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="">Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Bio"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.aboutMe"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="">About Me</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="About Me"
                  className="resize-y max-h-[500px] overflow-y-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className={`w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:animate-pulse`}
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
