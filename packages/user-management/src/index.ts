import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { prisma } from "@repo/db";

const t = initTRPC.create();

const appRouter = t.router({
  getById: t.procedure.input(z.string()).query((opts) => {
    return { id: opts.input, name: "Bilbo" };
  }),
  create: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (opts) => {
      // use your ORM of choice
      return opts.input;
    }),
});

export type AppRouter = typeof appRouter;
