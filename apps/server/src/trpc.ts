import { initTRPC } from "@trpc/server";
import UserRouter from "@repo/user-management";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  user: UserRouter,
});

export type AppRouter = typeof appRouter;
