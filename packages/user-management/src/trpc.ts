import bcrypt from "bcrypt";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { prisma } from "@repo/db";
import { createUserSchema, CreateUserSchemaType } from "./schema";
import { createUser } from "./service";

const t = initTRPC.create();
const appRouter = t.router({
  getById: t.procedure.input(z.string()).query((opts) => {
    return { id: opts.input, name: "Bilbo" };
  }),
  create: t.procedure
    .input(createUserSchema)
    .mutation(async (opts) => {
      const input = opts.input as CreateUserSchemaType;
      const result = await createUser(input);
      return result;
    }),
});


export type AppRouter = typeof appRouter;

export default appRouter;
