"use client";

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
import { SignUpValidation } from "@/lib/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      profile: {
        contactNo: "",
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpValidation>) => {
    try {
      console.log(values);

      // await signIn(values.email, values.password);
      // form.reset();
      // router.push("/");
    } catch (error: any) {}
  };
  return (
    <section className="max-w-screen-sm mx-auto !py-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-6 max-sm:gap-6"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center">Sign up</h1>
            <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
          </div>

          {error && (
            <div className="bg-red-500 text-white p-2 text-sm">{error}</div>
          )}

          <FormField
            control={form.control}
            name="name"
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
