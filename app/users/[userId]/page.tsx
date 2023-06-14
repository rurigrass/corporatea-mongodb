"use client";

import MiniHeader from "@/components/layout/MiniHeader";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import { UserProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type ParamsProps = {
  userId: string;
};

const UserView = ({ params }: { params: ParamsProps }) => {
  const { userId } = params;
  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/users/${userId}`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="#F4A7D2" size={80} />
      </div>
    );
  }

  return (
    <>
      <MiniHeader showBackArrow label={user.userName} />
      <UserHero user={user} />
      <UserBio user={user}/>
    </>
  );
};

export default UserView;
