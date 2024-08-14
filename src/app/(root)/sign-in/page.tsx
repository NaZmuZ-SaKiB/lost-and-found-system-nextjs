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
import { signInAction } from "@/lib/actions/auth.actions";
import { SignInValidation } from "@/lib/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SignInPage = () => {
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
      const result = await signInAction(values.email, values.password);

      if (result.success) {
        toast.success("Login successful", { duration: 2000 });
        form.reset();
        router.push("/");
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to login");
    }
  };
  return (
    <section className="max-w-screen-sm mx-auto !py-20 px-2 sm:px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10 max-sm:gap-6"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center">Sign in</h1>
            <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-600" />
          </div>

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

          <p className="">
            <Link href="/sign-in" className="text-pink-600">
              Forgot Password?
            </Link>
          </p>

          <div>
            <Button
              className={`w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:animate-pulse`}
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {!form.formState.isSubmitting ? "Sign In" : "Signing In..."}
            </Button>

            <div className="mt-3 space-x-3 text-center">
              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={form.formState.isSubmitting}
                className="px-2 h-8 bg-transparent border-pink-600 text-pink-600 hover:bg-pink-50 hover:text-pink-700 disabled:opacity-50"
                onClick={() => {
                  form.setValue("email", "sarah@gmail.com");
                  form.setValue("password", "22222222");
                  form.handleSubmit(onSubmit)();
                }}
              >
                Test User Login
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="px-2 h-8 bg-transparent border-pink-600 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
                onClick={() => {
                  form.setValue("email", "admin@gmail.com");
                  form.setValue("password", "11111111");
                  form.handleSubmit(onSubmit)();
                }}
              >
                Test Admin Login
              </Button>
            </div>
          </div>
        </form>
        <p className=" mt-3">
          {"Don't"} have an account?{" "}
          <Link href="/sign-up" className="text-pink-600">
            Sign up
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignInPage;
