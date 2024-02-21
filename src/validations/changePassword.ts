import { z } from "zod";

export const VerificationEmailSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const ChangePasswordSchema= z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: 'Password mus be at least 6 characters long',
  }),
  confirmPassword: z.string().min(6, {
    message: 'Password mus be at least 6 characters long',
  }),
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});