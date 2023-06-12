import getUsers from "@/app/actions/getUsers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    // return res.status(405).json({ message: "Method Not Allowed" });
    console.log("POOP");
  }

  try {
    const users = await getUsers()

    console.log("USERS: ", users);

    return NextResponse.json( users , { status: 200 });
    // return new Response
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error });
    // return res.status(500).json({ error: "Internal Server Error" });
  }
}

// // import getUsers from "@/app/actions/getUsers"
// import { SafeUser } from "../../../types"; // Import User type from your types.ts file


// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // const users: SafeUser[] = await getUsers();
//      const users = await prisma.user.findMany({
//       select: {
//         id: true,
//         name: true,
//         userName: true,
//         email: true,
//         updatedAt: true,
//         createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     console.log("USERS ", users);
    
//     return NextResponse.json( users , { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
