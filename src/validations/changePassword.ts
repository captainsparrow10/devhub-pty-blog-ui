import { z } from "zod";

export const verificationEmailSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const changePasswordSchema= z.object({
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