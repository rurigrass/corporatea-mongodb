// import { User as PrismaUser } from "../node_modules/.prisma/client/index";

import { User } from "@prisma/client";

// export type SafeUser = {
//     id: string;
//     name: string 
//     userName?: string;
//     email?: string;
//     emailVerified?: Date;
//     createdAt: Date;
//     updatedAt: Date;
//   };

  export type SafeUser = {
    id: string;
    name: string | null; // Allow for nullable name property
    userName?: string | null; // Allow for nullable userName property
    email?: string | null; // Allow for nullable email property
    emailVerified?: Date | null;
    createdAt: Date | null;
    updatedAt: Date;
  };

  //DO SOMETHING LIKE THIS BUT INCLUDE PICK instead of OMIT = https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
// export type SafeUser = Omit<
//   User,
//   "createdAt" | "updatedAt" | "emailVerified"
// > & {
//   createdAt: string;
//   updatedAt: string;
//   emailVerified: Date | null;
// };

//dunno why name has to be nullable
// export type SafeUser = {
//     id: string;
//     name: string | null; // Allow for nullable name property ?????
//     userName?: string;
//     bio?: string;
//     email?: string;
//     emailVerified?: Date;
//     image?: string;
//     coverImage?: string;
//     profileImage?: string;
//     hashedPassword?: string;
//     createdAt: Date;
//     updatedAt: Date;
//     followingIds: string[];
//     hasNotification?: boolean;
//     spills?: Spill[];
//     comments?: Comment[];
//     notifications?: Notification[];
//   };

//   type SafeUser = {
//     id: string;
//     name: string;
//     userName: string | null;
//     bio: string | null;
//     email: string;
//     emailVerified: boolean | null;
//     image: string | null;
//     coverImage: string | null;
//     profileImage: string | null;
//     hashedPassword: string;
//     createdAt: Date;
//     updatedAt: Date;
//     followingIds: string[];
//     hasNotification: boolean | null;
//   };
  
  export type Spill = {
    id: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    likedIds: string[];
    user: SafeUser; // Use SafeUser instead of User
    comments: Comment[];
  };