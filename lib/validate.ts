import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z
    .string()
    .min(6, "Description must be at least 6 characters long")
    .max(500, "Only 500 characters allowed"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters long")
    .max(400, "Only 400 characters allowed"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
