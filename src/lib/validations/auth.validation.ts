import { z } from "zod";

export const SignUpValidation = z.object({
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid Email" }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(6, { message: "Password must be minimum 6 chars." }),

  profile: z.object({
    contactNo: z.string({
      required_error: "Contact No is required.",
      invalid_type_error: "Contact No must be a string.",
    }),
    name: z.string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    }),
  }),
});

export const SignInValidation = z.object({
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid Email" }),
  password: z.string({
    required_error: "Password is required.",
    invalid_type_error: "Password must be a string.",
  }),
});

export const ChangePasswordValidation = z.object({
  oldPassword: z
    .string({
      required_error: "Old Password is required.",
      invalid_type_error: "Old Password must be a string.",
    })
    .min(1, { message: "Old Password is required" }),
  newPassword: z
    .string({
      required_error: "New Password is required.",
      invalid_type_error: "New Password must be a string.",
    })
    .min(6, { message: "Password must be minimum 6 chars." }),
});
