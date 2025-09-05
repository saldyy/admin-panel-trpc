import { z } from "zod";

export const createUserSchema = z.object({
  email: z.email(),
  fullname: z.string().min(5),
  password: z.string().min(8),
});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
