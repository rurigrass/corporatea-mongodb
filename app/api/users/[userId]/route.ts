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
  try {
    if (userId !== undefined) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      // console.log("USER: ", user);
      
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: "User ID is undefined" });
    }
  } catch (error) {
    console.log("Error fetching unique user:", error);
    return NextResponse.json({ error });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: ParamProps }
) {
  try {
    const { userId } = params;
    const body = await request.json();
    const { name, userName, bio, profileImage, coverImage } = body;
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        userName,
        bio,
        profileImage,
        coverImage,
      },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    console.log("Error updating user:", error);
    return NextResponse.json({ error });
  }
}
