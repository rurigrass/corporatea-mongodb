import getUsers from "@/app/actions/getUsers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    console.log("POOP");
  }
  try {
    const users = await getUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error });
  }
}
