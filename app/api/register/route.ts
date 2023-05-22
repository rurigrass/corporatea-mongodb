import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';
// import NextAuth, {authOptions} from 'next-auth/next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
 
  try {
    const { email, userName, name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        userName,
        name,
        hashedPassword,
      }
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

// export default NextAuth(authOptions);