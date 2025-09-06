"use client";

import type { AppRouter as UserRouter } from '@repo/user-management';
import { createTRPCContext } from '@trpc/tanstack-react-query';

export type AppRouter = UserRouter;
export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
