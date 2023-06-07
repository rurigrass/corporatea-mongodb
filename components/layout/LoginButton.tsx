import { useCallback } from "react";
// import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";
// import useCurrentUser from "@/hooks/useCurrentUser";

const LoginButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  //   const { data: currentUser } = useCurrentUser();

    const onClick = useCallback(() => {
    //   if (!currentUser) {
        return loginModal.onOpen();
    //   }

      router.push('/');
    }, [loginModal, router]);

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
        bg-green_ct-green_ct
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
          Login
        </p>
      </div>
    </div>
  );
};

export default LoginButton;