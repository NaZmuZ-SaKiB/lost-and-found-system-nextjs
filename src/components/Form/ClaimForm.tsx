"use client";

import CustomDatePicker from "@/components/Form/CustomDatePicker";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { createClaim } from "@/lib/actions/claim.actions";
import { ClaimValidation } from "@/lib/validations/claim.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ClaimForm = ({ lostItemId }: { lostItemId: string }) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(ClaimValidation),
    defaultValues: {
      foundItemId: lostItemId,
      distinguishingFeatures: "",
      lostDate: new Date().toISOString(),
    },
  });

  const onSubmit = async (values: z.infer<typeof ClaimValidation>) => {
    console.log(values);

    try {
      const result = await createClaim(values);
      if (result.success) {
        toast.success("Claim successful", { duration: 2000 });
        form.reset();
        router.refresh();
      } else {
        toast.error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to Claim");
    }
  };
  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 border border-pink-500 rounded-3xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10 max-sm:gap-6"
        >
          <h1 className="text-4xl font-semibold">Claim</h1>

          <div className="w-40">
            <CustomDatePicker
              name="lostDate"
              label="Lost Date"
              control={form.control}
            />
          </div>

          <FormField
            control={form.control}
            name="distinguishingFeatures"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 w-full">
                <FormLabel className="">Distinguishing Features</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Distinguishing Features"
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
            {!form.formState.isSubmitting ? "Claim" : "Claiming..."}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ClaimForm;
