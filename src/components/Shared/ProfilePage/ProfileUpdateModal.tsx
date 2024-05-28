"use client";

import ImageUploadButton from "@/components/Form/ImageUploadButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { updateUser } from "@/lib/actions/user.actions";
import { UpdateProfileValidation } from "@/lib/validations/user.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

type TProps = {
  name: string;
  email: string;
  age?: number;
  contactNo: string;
  bio?: string;
  image?: string;
};

const ProfileUpdateModal = ({
  name,
  email,
  age,
  contactNo,
  bio,
  image: oldImage,
}: TProps) => {
  const [open, setOpen] = useState(false);

  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(UpdateProfileValidation),
    defaultValues: {
      email: email || "",
      profile: {
        contactNo: contactNo || "",
        name: name || "",
        bio: bio || "",
        age: age || 0,
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
        setOpen(false);
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to update profile");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-pink-500 hover:bg-pink-600">
          <FaEdit className="mr-2" /> Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-start gap-3 max-sm:gap-6"
          >
            <ImageUploadButton
              image={image}
              imageSrc={imageSrc}
              setImage={setImage}
              setImageSrc={setImageSrc}
              title="Update Profile"
            />
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

            <DialogFooter>
              <Button
                className={`w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 disabled:animate-pulse`}
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileUpdateModal;
