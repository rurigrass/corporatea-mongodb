// import bcrypt from 'bcrypt';
// import { NextApiRequest, NextApiResponse } from "next";

// import prisma from '@/libs/prismadb';
// // import NextAuth, {authOptions} from 'next-auth/next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("HELOWOEOWOFOWOFEW ", req, res);

//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }

//   try {
//     const { email, userName, name, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await prisma.user.create({
//       data: {
//         email,
//         userName,
//         name,
//         hashedPassword,
//       }
//     });

//     return res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).end();
//   }
// }

////NEXT13 guy
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, context: any) {
  console.log("HELOWOEOWOFOWOFEW ", req, context);

  try {
    const res = await req.json();
    const registerData = res.registerData;

    const hashedPassword = await bcrypt.hash(registerData.password, 12);

    const user = await prisma.user.create({
      data: {
        email: registerData.email,
        userName: registerData.userName,
        name: registerData.name,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}


