import { randomInt } from "node:crypto";
import { describe, it, expect } from "@jest/globals";
import { createUser } from "./service";

describe("#createUser", () => {
  it("should create user", async () => {
    const mockEmail = `test+${randomInt(1e9)}@gmail.com`;
    const result = await createUser({
      email: mockEmail,
      fullname: "saldyy",
      password: "123456",
    });

    expect(result).toEqual({
      email: mockEmail,
      fullname: "saldyy",
    });
  });
})
