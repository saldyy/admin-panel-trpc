import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CreateUserSchemaType } from "./schema";
import { prisma } from "@repo/db";
import crypto from "node:crypto";

const SALT_ROUNDS = 10;
const JWT_SECRET = "secret";

export async function login(payload: { email: string, password: string }) {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Email not registered");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid password");
  }

  const accessToken = jsonwebtoken.sign({ sub: user.id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  const refreshToken = crypto.randomBytes(64).toString("hex"); // 128-char hex string

  return {
    accessToken,
    refreshToken,
  };
}

export async function createUser(input: CreateUserSchemaType) {
  const hashPassword = await bcrypt.hash(input.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      fullname: input.fullname,
      password: hashPassword,
    }
  });

  console.log(user);
  return {
    email: user.email,
    fullname: user.fullname,
  };
}

