"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import prisma from "@/libs/prismadb";
import { useRouter } from "next/navigation";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  const router = useRouter();

  const [user, setUser] = useState();

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
      event.stopPropagation(); // overides parent element onclick
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
  ${hasBorder ? "border-4 border-black_ct" : ""}
  ${isLarge ? "h-32" : "h-12"}
  ${hasBorder ? "w-32" : "w-12"}
  `}
    >
      click me
    </div>
  );
};

export default Avatar;
