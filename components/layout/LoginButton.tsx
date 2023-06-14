import { useCallback } from "react";
// import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";

const LoginButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    return loginModal.onOpen();
  }, [loginModal]);

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
      bg-blue-tintiest 
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
        bg-green-green
        hover:bg-opacity-90 
        cursor-pointer
      "
      >
        <p
          className="
            lg:block 
            text-center
            font-semibold
            text-white 
            text-lg
        "
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default LoginButton;
