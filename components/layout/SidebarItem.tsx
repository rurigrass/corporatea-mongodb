import useLoginModal from "@/hooks/useLoginModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback } from "react";

type ItemProps = {
  label: string;
  href: string;
  icon: ReactNode;
  auth: boolean;
};

const SidebarItem = ({ label, href, auth, icon }: ItemProps) => {
    const { data: session } = useSession();
    const router = useRouter();
    const loginModal = useLoginModal();

    // console.log("SESHH ", !session);
    


    const handleClick = useCallback(() => {
  
      if (auth && !session) {
        loginModal.onOpen();
      } else if (href) {
        router.push(href);
      }
    }, [session, href, auth, loginModal, router]);


  return <li className="flex items-center gap-2 cursor-pointer" onClick={handleClick}>{icon}{label}</li>;
};

export default SidebarItem;
