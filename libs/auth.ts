import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";
import { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, userName, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // check if credentials have userName and password
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          },
        });
        // check if user exists and has password exists valid
        if (!user || !user?.hashedPassword) {
          throw new Error("User does not exist");
        }
        // check is password is correct
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        //throw error if wrong password
        if (!isCorrectPassword) {
          throw new Error("Password incorrect");
        }
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
