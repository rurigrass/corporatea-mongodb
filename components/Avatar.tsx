"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import prisma from "@/libs/prismadb";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserProps } from "@/types";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  const router = useRouter();

  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const onClick = useCallback(
    (event: any) => {
      // event.stopPropagation(); // overides parent element onclick
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  if (user === undefined) {
    return null;
  }
  
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer 
        relative
      `}
    >
      <Image
      fill
      style={{
        objectFit: 'cover',
        borderRadius: '100%'
      }}
      alt="Avatar"
      onClick={onClick}
      src={user?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
};

export default Avatar;
