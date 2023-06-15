"use client";

import MiniHeader from "@/components/layout/MiniHeader";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { ClipLoader } from "react-spinners";

type ParamsProps = {
  userId: string;
};

const UserView = ({ params }: { params: ParamsProps }) => {
  const { userId } = params;
  const {data: user, isLoading} = useUser(userId)

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
