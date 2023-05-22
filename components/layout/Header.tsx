"use client";

import { useRouter } from "next/navigation";
import HeaderSpillButton from "./HeaderSpillButton";
import Button from "../Button";
import Logo from "./Logo";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-16 bg-black_ct flex items-center justify-between">
      <Logo />
      <div className="mr-2">
        {/* <Button small label="Post" onClick={() => router.push("/")} /> */}
        <HeaderSpillButton/>
      </div>
    </div>
  );
};

export default Header;
