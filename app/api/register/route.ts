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