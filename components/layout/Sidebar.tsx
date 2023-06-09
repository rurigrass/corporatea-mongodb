import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Session } from "next-auth";

type SidebarProps = {
  isOpen: boolean;
  items: itemProps[];
  handleNav: () => void;
  session: Session | null;
};

type itemProps = {
  label: string;
  href: string;
  icon: string;
  auth: boolean;
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

const Sidebar = ({ isOpen, items, handleNav, session }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="bg-blue_ct-normal_ct p-5 h-screen "
          initial="closed"
          animate="open"
          exit="closed"
          variants={sideVariants}
        >
          <div className="flex w-full item justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <ul>
            {items.map((item) => (
              <li key={item.label} className="py-4 cursor-pointer">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li className="py-4 cursor-pointer">
              {session ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
