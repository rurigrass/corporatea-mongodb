import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/libs/prismadb";

// export default NextAuth({
//   adapter: PrismaAdapter(prisma), 
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { label: "email", type: "text" },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // check if credentials have username and password
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Invalid credentials");
//         }
//         // Add logic here to look up the user from the credentials supplied
//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });
//         // check if user exists and has password exists valid
//         if (!user || !user?.hashedPassword) {
//           throw new Error("User does not exist");
//         }
//         // check is password is correct
//         const isCorrectPassword = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword
//         );
//         //throw error if wrong password
//         if (!isCorrectPassword) {
//           throw new Error("Password incorrect");
//         }
//         return user;
//       },
//     }),
//   ],
//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET
//   },
//   secret: process.env.NEXTAUTH_SECRET
// });

// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import bcrypt from "bcrypt"
// import NextAuth, { AuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// import prisma from "@/libs/prismadb"

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'email', type: 'text' },
//         password: { label: 'password', type: 'password' }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Invalid credentials');
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         });

//         if (!user || !user?.hashedPassword) {
//           throw new Error('Invalid credentials');
//         }

//         const isCorrectPassword = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword
//         );

//         if (!isCorrectPassword) {
//           throw new Error('Invalid credentials');
//         }

//         return user;
//       }
//     })
//   ],
//   debug: process.env.NODE_ENV === 'development',
//   session: {
//     strategy: 'jwt',
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET,
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default NextAuth(authOptions);

const handler = NextAuth({
  adapter: PrismaAdapter(prisma), 
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // check if credentials have username and password
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
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
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };