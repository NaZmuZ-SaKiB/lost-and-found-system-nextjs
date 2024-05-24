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
import { SignInValidation } from "@/lib/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInValidation>) => {
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
          className="flex flex-col justify-start gap-10 max-sm:gap-6"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center">Sign in</h1>
            <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
          </div>

          {error && (
            <div className="bg-red-500 text-white p-2 text-sm">{error}</div>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
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
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="password"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="">
            <Link href="/sign-in" className="text-pink-500">
              Forgot Password?
            </Link>
          </p>

          <Button
            className={`bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 disabled:animate-pulse`}
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {!form.formState.isSubmitting ? "Sign In" : "Signing In..."}
          </Button>
        </form>
        <p className=" mt-3">
          {"Don't"} have an account?{" "}
          <Link href="/sign-up" className="text-pink-500">
            Sign up
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignInPage;
