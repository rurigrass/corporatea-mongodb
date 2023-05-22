"use client";
// import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface SessionProps {
//   session: Session | null;
  children: React.ReactNode;
}

const Provider = ({ children }: SessionProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
