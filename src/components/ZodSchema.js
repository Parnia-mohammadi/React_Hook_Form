import { z } from "zod";
export const zodSchema = z.object({
  name: z
    .string()
    .nonempty("You should enter your name")
    .min(2, "Enter at least 2 characters"),
  lastName: z
    .string()
    .nonempty("You should enter your lastName")
    .min(2, "Enter at least 2 characters"),
  email: z
    .string()
    .email("format of email is incorrect")
    .nonempty("You should enter your email"),
  query: z.boolean().optional(),
  message: z
    .string()
    .nonempty("You should enter your message")
    .min(10, "Enter at least 10 characters"),
  consent: z
    .boolean()
    .refine((value) => value === true, "You should accept the conditions"),
});
