import { z } from "zod";

export const LostItemCreateValidation = z.object({
  categoryId: z
    .string({
      invalid_type_error: "Category must be a string.",
      required_error: "Category is required.",
    })
    .min(1, { message: "Category can't be empty." }),

  lostItemName: z
    .string({
      invalid_type_error: "Found Item Name must be a string.",
      required_error: "Found Item Name is required.",
    })
    .min(1, { message: "Lost Item Name can't be empty." }),

  brand: z
    .string({
      invalid_type_error: "Brand must be a string.",
    })
    .optional(),

  description: z
    .string({
      invalid_type_error: "Description must be a string.",
      required_error: "Description is required.",
    })
    .min(1, { message: "Description can't be empty." }),

  location: z
    .string({
      invalid_type_error: "Location must be a string.",
      required_error: "Location is required.",
    })
    .min(1, { message: "Location can't be empty." }),

  lostDate: z
    .string({
      invalid_type_error: "Lost Date must be a string.",
    })
    .optional(),

  contactNo: z
    .string({
      invalid_type_error: "Contact No must be a string.",
    })
    .optional(),
});
