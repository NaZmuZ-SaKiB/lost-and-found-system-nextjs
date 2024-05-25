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
import { changePassword } from "@/lib/actions/auth.actions";
import { ChangePasswordValidation } from "@/lib/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangePasswordPage = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(ChangePasswordValidation),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ChangePasswordValidation>) => {
    try {
      const result = await changePassword(values);
      if (result.success) {
        toast.success("Password Changed");
        form.reset();
        router.push("/sign-in");
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to change password");
    }
  };
  return (
    <section className="max-w-screen-sm mx-auto !py-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10 max-sm:gap-6"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center">
              Change Password
            </h1>
            <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
          </div>

          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel className="">Old Password</FormLabel>
                <FormControl>
                  <Input placeholder="Old Password" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel className="">New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Password"
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
            {!form.formState.isSubmitting ? "Change Password" : "Updating..."}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ChangePasswordPage;
