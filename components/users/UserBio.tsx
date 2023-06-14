import { UserProps } from "@/types";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import Button from "../Button";

const UserBio = ({ user }: { user: UserProps }) => {
  const { data: session } = useSession();

  const createdAt = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }
    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user?.createdAt]);

  return (
    <div className="flex items-center border-b-[1px] border-gray-gray p-3">
    <div className=" flex-1 ml-36">
      <p className="text-white text-2xl font-semibold ">{user?.name}</p>
      <p className="text-md text-gray-gray">@{user?.userName}</p>
    </div>
    <div className="ml-auto">
      {session?.user?.email === user.email ? (
        <Button secondary label="Edit" onClick={() => {}} />
      ) : (
        <Button secondary label="Follow" onClick={() => {}} />
      )}
    </div>
  </div>
  );
};

export default UserBio;
