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

  const items = [
    { label: "Notifications", href: "/notifications", icon: "", auth: true },
    { label: "Profile", href: "/users/123", icon: "", auth: true },
    { label: "yep", href: "", icon: "", auth: true },
  ];

  return (
    <nav className="h-16 w-full bg-black_ct ">
      <div className="flex items-center justify-between h-full w-full px-4 2xl:px-16">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="hidden sm:flex items-center justify-center">
            {items.map((item) => (
              <li className="ml-10 uppercase hover:border-b hover:cursor-pointer text-xl ">
                {item.label}
              </li>
            ))}
            <li className="ml-10 uppercase text-xl">
              {session ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
