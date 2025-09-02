"use client";

import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter as UserRouter } from '@repo/user-management';

export type AppRouter = UserRouter;
export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
