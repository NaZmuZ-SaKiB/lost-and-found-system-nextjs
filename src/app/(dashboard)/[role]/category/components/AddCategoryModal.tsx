"use client";

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
import { createCategory } from "@/lib/actions/category.actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

const categoryValidation = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string.",
      required_error: "Name is required.",
    })
    .min(3, { message: "Name must be at least 3 char long." }),
});

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(categoryValidation),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof categoryValidation>) => {
    try {
      const result = await createCategory(values);
      if (result.success) {
        toast.success("Category created successfully");
        setOpen(false);
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to create category");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-pink-600 hover:bg-pink-700">
          <FaEdit className="mr-2" /> Create Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 flex flex-col justify-start gap-3 max-sm:gap-6"
          >
            <FormField
              control={form.control}
              name="name"
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

            <DialogFooter>
              <Button
                className={`bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:animate-pulse`}
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
