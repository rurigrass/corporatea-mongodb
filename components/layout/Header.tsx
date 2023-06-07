"use client";

// import { useRouter } from "next/navigation";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
// import Button from "../Button";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Header = () => {
  // const router = useRouter();
  const { data: session } = useSession();  

  return (
    <div className="h-16 bg-black_ct flex items-center justify-between">
      <Logo />
      <div className="mr-2">
        {/* <Button small label="Post" onClick={() => router.push("/")} /> */}
        {session ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
