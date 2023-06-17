import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany({
      select: {
          id: true,
          name: true,
          userName: true,
          email: true,
          updatedAt: true,
          createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      },
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error });
  }
}
