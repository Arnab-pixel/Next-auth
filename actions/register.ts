"use server";

import { RegisterSchema } from "@/schemas";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFeilds = RegisterSchema.safeParse(values);

  if (!validatedFeilds.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFeilds.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already is use!" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO:Send verification token email

  return { success: "User created!" };
};
