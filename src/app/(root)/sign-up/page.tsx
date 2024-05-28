"use client";

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
import { signUpAction } from "@/lib/actions/auth.actions";
import { uploadImage } from "@/lib/actions/imgbb.actions";
import { SignUpValidation } from "@/lib/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SignUpPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      email: "",
      password: "",
      profile: {
        name: "",
        contactNo: "",
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpValidation>) => {
    try {
      let data: any = { ...values };
      let imgUrl: any = null;

      if (image) {
        imgUrl = await uploadImage(image);
        data.profile.image = imgUrl;
      }

      const result = await signUpAction(data);
      console.log("result", result?.message);

      if (result.success) {
        toast.success("Account created successfully");
        form.reset();
        router.push("/");
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to create account");
    }
  };
  return (
    <section className="max-w-screen-sm mx-auto !py-20 px-2 sm:px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-6 max-sm:gap-6"
        >
          <div className="mb-5">
            <h1 className="text-4xl font-semibold text-center">Sign up</h1>
            <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
          </div>

          <ImageUploadButton
            image={image}
            imageSrc={imageSrc}
            setImage={setImage}
            setImageSrc={setImageSrc}
            title="Add Profile"
          />

          <FormField
            control={form.control}
            name="profile.name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
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
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
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
            name="profile.contactNo"
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className={`bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 disabled:animate-pulse`}
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {!form.formState.isSubmitting ? "Sign Up" : "Signing Up..."}
          </Button>
        </form>
        <p className=" mt-3">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-pink-500">
            Sign in
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignUpPage;
