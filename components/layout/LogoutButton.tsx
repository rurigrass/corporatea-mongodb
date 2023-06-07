"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const onClick = () => {
    signOut();
  };

  return (
    <div onClick={onClick}>
      {/* <div
        className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
      bg-blue_ct-tintiest_ct 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      "
      >
        <FaFeather size={24} color="white" />
      </div> */}
      <div
        className="
        lg:block 
        px-4
        py-1
        rounded-full 
        bg-red_ct
        hover:bg-opacity-90 
        cursor-pointer
      "
      >
        <p
          className="
            lg:block 
            text-center
            font-semibold
            text-white_ct 
            text-lg
        "
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default LogoutButton;
