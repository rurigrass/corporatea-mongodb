"use client";

import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const items = [
    { label: "Notifications", href: "/notifications", icon: "", auth: true },
    { label: "Profile", href: "/users/123", icon: "", auth: true },
    { label: "yep", href: "", icon: "", auth: true },
  ];

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-16 w-full bg-black_ct ">
      <div className="flex items-center justify-between h-full w-full px-4 2xl:px-16">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="hidden sm:flex items-center justify-center">
            {items.map((item) => (
              <li
                key={item.label}
                className="ml-10 uppercase hover:border-b hover:cursor-pointer text-xl "
              >
                {item.label}
              </li>
            ))}
            <li className="ml-10 text-xl">
              {session ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-blue_ct-normal_ct p-5 ease-in duration-500"
            : "fixed left-[-65%] ease-out duration-1000"
        }
      >
        <div className="flex w-full item justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            {items.map((item) => (
              <li key={item.label} className="py-4 cursor-pointer">
                {item.label}
              </li>
            ))}
            <li className="py-4 cursor-pointer">
              {session ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
