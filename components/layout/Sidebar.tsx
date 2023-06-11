"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IconBase, IconType } from "react-icons";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import useSidebar from "@/hooks/useSidebar";
import { useSession } from "next-auth/react";
import { ReactNode, useCallback } from "react";

import SidebarItem from "./SidebarItem";

type ItemProps = {
  label: string;
  href: string;
  icon: ReactNode;
  auth: boolean;
};

type SidebarProps = {
  items: ItemProps[];
};

const sideVariants = {
  closed: {
    opacity: 0,
    width: 0,
  },
  open: {
    opacity: 1,
    width: "65%",
  },
};

const backgroundVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const Sidebar = ({ items }: SidebarProps) => {
  const { data: session } = useSession();
  const sidebar = useSidebar();

  const toggleSidebar = useCallback(() => {
    sidebar.isOpen ? sidebar.onClose() : sidebar.onOpen();
  }, [sidebar]);

  return (
    <AnimatePresence>
      {sidebar.isOpen && (
        <motion.div
          className="
        fixed 
        inset-0 
      bg-blue_ct-tintiest_ct
        bg-opacity-70"
          initial="closed"
          animate="open"
          exit="closed"
          variants={backgroundVariants}
        >
          <motion.nav
            className="bg-blue_ct-normal_ct p-5 h-screen"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <div className="flex w-full item justify-end">
              <div onClick={toggleSidebar} className="cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <ul className="space-y-4 mt-2">
              {items &&
                items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    auth={item.auth}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
              <li className="cursor-pointer">
                {session ? <LogoutButton /> : <LoginButton />}
              </li>
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
