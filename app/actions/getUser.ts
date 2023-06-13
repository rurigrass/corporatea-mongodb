import prisma from "@/libs/prismadb";

export default async function getUser(userId: string) {
  const users = await prisma.user.findUnique({
    where: {
        id: userId
    }
  });

  return users; 
}
