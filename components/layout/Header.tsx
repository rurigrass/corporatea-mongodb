"use client";

import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useCallback, useState } from "react";
import Sidebar from "./Sidebar";
import useSidebar from "@/hooks/useSidebar";

type ItemProps = {
  label: string;
  href: string;
  icon: string;
  auth: boolean;
};

type HeaderProps = {
  items: ItemProps[];
};

const Header = ({ items }: HeaderProps) => {
  const { data: session } = useSession();
  const sidebar = useSidebar();

  const toggleSidebar = useCallback(() => {
    sidebar.isOpen ? sidebar.onClose() : sidebar.onOpen();
  }, [sidebar]);

  return (
    <>
      <nav className="h-16 w-full bg-black_ct">
        <div className="flex items-center justify-between h-full w-full px-4 2xl:px-16">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="hidden sm:flex items-center justify-center">
              {items &&
                items.map((item) => (
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
            <div onClick={toggleSidebar} className="sm:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
