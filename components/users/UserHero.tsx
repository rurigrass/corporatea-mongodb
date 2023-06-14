import { UserProps } from "@/types";
import Avatar from "../Avatar";
import Image from "next/image";

const UserHero = ({ user }: { user: UserProps }) => {
  return (
    <div>
      <div className="h-44 relative bg-gray-gray">
        {user?.coverImage && (
          <Image
            src={user.coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={user.id} isLarge hasBorder/>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
