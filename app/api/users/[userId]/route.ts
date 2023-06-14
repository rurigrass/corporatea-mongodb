import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getUser from "@/app/actions/getUser";

type ParamProps = {
  userId?: string;
};

export async function GET(
  request: Request,
  { params }: { params: ParamProps }
) {
  const { userId } = params;
  if (request.method !== "GET") {
    console.log("POOP");
  }
  try {
    if (userId !== undefined) {
      const user = await getUser(userId);
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: "User ID is undefined" });
    }
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, userName } = body;
  } catch (error) {
    
  }
}