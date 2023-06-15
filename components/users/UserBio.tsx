import { UserProps } from "@/types";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";
import useEditModal from "@/hooks/useEditModal";

const UserBio = ({ user }: { user: UserProps }) => {
  const { data: session } = useSession();
  const editModal = useEditModal();

  const createdAt = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }
    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user?.createdAt]);

  return (
    <div className="border-b-[1px] border-gray-gray p-2">
      <div className="flex items-center ">
        <div className="ml-36">
          <p className="text-white text-2xl font-semibold ">{user?.name}</p>
          <p className="text-md text-gray-gray">@{user?.userName}</p>
        </div>
        <div className="ml-auto">
          {session?.user?.id === user?.id ? (
            <Button secondary label="Edit" onClick={editModal.onOpen} />
          ) : (
            <Button secondary label="Follow" onClick={() => {}} />
          )}
        </div>
      </div>
      <div className="flex flex-col xs:flex-row">
        <div className="flex flex-row mt-3 gap-2">
            <div className="flex flex-row items-center gap-1">
                <p className="text-white">
                    {user?.followingIds?.length}
                </p>
                <p className="text-gray-gray">
                    Following
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <p className="text-white">
                    {/*should be user?.followersCount */}
                    {user?.followingIds?.length || 0} 
                </p>
                <p className="text-gray-gray">
                    Followers
                </p>
            </div>
        </div>
        <div className="flex xs:ml-auto gap-1 mt-3 text-gray-gray">
          <BiCalendar size={24} />
          <p>Joined {createdAt}</p>
        </div>
        {/* <p className="text-white">{user?.bio}</p> */}
      </div>
    </div>
  );
};

export default UserBio;
