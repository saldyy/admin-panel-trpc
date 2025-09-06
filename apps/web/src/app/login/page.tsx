"use client";

import { Button, FormControl, Input, InputLabel, Paper, Stack, TextField } from "@mui/material";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useTRPC } from "../../utils/trpc";
import { Controller, useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
}

export default function Login() {
  const trpc = useTRPC();
  const { mutate: registerUser } = useMutation(trpc.user.create.mutationOptions())
  const { register, control, handleSubmit, } = useForm<LoginFormData>();

  const onSubmit = (data: { email: string, password: string }) => {
    console.log(data);
  }

  return (
    <Stack height={"100vh"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} p={2} width={"30vw"}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField fullWidth {...field} type="email" label="Email address" />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField fullWidth {...field} type="password" label="Password" />
            )}
          />
          <Button type="submit" variant="contained" fullWidth>Login</Button>
        </Stack>
      </form>

    </Stack>
  );
}
