import prisma from "@/libs/prismadb";

export default async function getUsers() {
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

  return users; 
}
