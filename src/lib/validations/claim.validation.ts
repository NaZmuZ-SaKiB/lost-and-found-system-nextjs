import { z } from "zod";

export const ClaimValidation = z.object({
  foundItemId: z.string(),
  distinguishingFeatures: z
    .string({
      invalid_type_error: "Distinguishing Features must be a string.",
      required_error: "Distinguishing Features is required.",
    })
    .min(1, { message: "Distinguishing Features can't be empty." }),
  lostDate: z
    .string({
      invalid_type_error: "Lost Date must be a string.",
      required_error: "Lost Date is required.",
    })
    .min(1, { message: "Lost Date can't be empty." }),
});
