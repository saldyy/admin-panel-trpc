import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { CreateUserSchemaType, createUserSchema, } from "./schema";
import { createUser } from "./service";

const t = initTRPC.create();

export const UserRouter = t.router({
  user: {
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
  }
});


export type AppRouter = typeof UserRouter;

