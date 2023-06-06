

// ////NEXT13 guy
// import bcrypt from "bcrypt";
// import { NextApiRequest, NextApiResponse } from "next";

// import prisma from "@/libs/prismadb";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   console.log("HELOWOEOWOFOWOFEW ", req);

//   try {
//     const res = await req.json();
//     const registerData = res.registerData;

//     const hashedPassword = await bcrypt.hash(registerData.password, 12);

//     const user = await prisma.user.create({
//       data: {
//         email: registerData.email,
//         userName: registerData.userName,
//         name: registerData.name,
//         hashedPassword: hashedPassword,
//       },
//     });

//     return NextResponse.json(user);
//   } catch (error) {
//     return NextResponse.json({ error: error });
//   }
// }


/////////////
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, userName } = body;


  if (!name || !email || !password || !userName) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: email,
        userName: userName,
        name: name,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

// import bcrypt from "bcrypt";
// import prisma from "@/libs/prismadb";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name, email, password, userName } = body;

//   if (!name || !email || !password) {
//     return new NextResponse("Missing Fields", { status: 400 });
//   }

//   const exist = await prisma.user.findUnique({
//     where: {
//       email,
//       // name
//     },
//   });

//   if (exist) {
//     throw new Error("Email already exists");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = await prisma.user.create({
//     data: {
//       name,
//       userName,
//       email,
//       hashedPassword,
//     },
//   });

//   return NextResponse.json(user);
// }

