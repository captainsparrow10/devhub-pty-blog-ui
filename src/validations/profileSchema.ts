import { z } from "zod";

export const ProfileSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  username: z.string().email({
    message: "Username is required",
  }),
  name: z.string().email({
    message: "Name is required",
  }),
  about: z.string().min(1, {
    message: "Password is required",
  }),
});