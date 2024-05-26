"use client";

import CustomDatePicker from "@/components/Form/CustomDatePicker";
import CustomSelect from "@/components/Form/CustomSelect";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createFoundItem } from "@/lib/actions/foundItem.actions";
import { FoundItemCreateValidation } from "@/lib/validations/foundItem.validation";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const ReportFoundItemPage = () => {
  const router = useRouter();

  const { data: categoriess, isLoading } = useGetAllCategoriesQuery(undefined);

  const form = useForm({
    resolver: zodResolver(FoundItemCreateValidation),
    defaultValues: {
      categoryId: "",
      foundItemName: "",
      description: "",
      location: "",
      foundDate: new Date().toISOString(),
      brand: "",
      contactNo: "",
      claimProcess: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof FoundItemCreateValidation>
  ) => {
    try {
      const result = await createFoundItem(values);
      if (result.success) {
        toast.success("Found item reported successfully");
        form.reset();
      } else {
        toast.error("Failed to report found item");
      }
    } catch (error: any) {
      toast.error("Failed to report found item");
    }
  };

  const categoryOptions =
    categoriess?.map((category: any) => ({
      label: category.name,
      value: category.id,
    })) || [];

  return (
    <section className="max-w-screen-sm mx-auto !py-20 max-sm:!py-10 px-2 sm:px-4">
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
                  <FormLabel className="">Found Location*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Found Location"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CustomDatePicker
              name="foundDate"
              label="Found Date"
              control={form.control}
            />
          </div>

          <FormField
            control={form.control}
            name="claimProcess"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 w-full">
                <FormLabel className="">Claim Process</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Claim Process"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If special process is needed to verify ownership of the item,
                  please mention here.
                </FormDescription>
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
