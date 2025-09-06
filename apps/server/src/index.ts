import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { UserRouter } from "@repo/user-management";

const createContext = () => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;


const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  UserRouter,
});

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);


app.get("/health", (_, res) => {
  return res.json({
    status: "ok",
  });
});

app.listen(4000);
