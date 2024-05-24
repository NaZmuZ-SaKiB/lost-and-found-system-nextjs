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
import { FoundItemCreateValidation } from "@/lib/validations/foundItem.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const ReportFoundItemPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FoundItemCreateValidation),
    defaultValues: {
      categoryId: "",
      foundItemName: "",
      description: "",
      location: "",
      foundDate: new Date().toISOString(),
    },
  });

  const onSubmit = async (
    values: z.infer<typeof FoundItemCreateValidation>
  ) => {
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
          className="flex flex-col justify-start gap-5 max-sm:gap-6"
        >
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-center">
              Report Found Item
            </h1>
            <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
          </div>

          {error && (
            <div className="bg-red-500 text-white p-2 text-sm">{error}</div>
          )}

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Category*</FormLabel>
                <FormControl>
                  <Input placeholder="Category" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="foundItemName"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Found Item Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Found Item Name"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Description*</FormLabel>
                <FormControl>
                  <Input placeholder="Description" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Where it was found ?*</FormLabel>
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

          <FormField
            control={form.control}
            name="foundDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Lost Date</FormLabel>
                <FormControl>
                  <Input placeholder="Lost Date" className="" {...field} />
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
            {!form.formState.isSubmitting ? "Submit" : "Submiting..."}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ReportFoundItemPage;