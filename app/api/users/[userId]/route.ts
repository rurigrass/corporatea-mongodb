import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

type ParamProps = {
  userId?: string;
};

export async function GET(
  request: Request,
  { params }: { params: ParamProps }
) {
  const { userId } = params;
  console.log(userId);

  if (request.method !== "GET") {
    console.log("POOP");
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error });
  }
}
