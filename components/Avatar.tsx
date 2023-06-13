'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import prisma from "@/libs/prismadb";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {

  // console.log("USERID ", userId);
  

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

  console.log(user);


  return <div></div>;
};

export default Avatar;
