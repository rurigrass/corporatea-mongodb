"use client";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [userName, setuserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", {
        email,
        password,
        userName,
        name,
      });
      // setIsLoading(false);
      toast.success("Account created.");
      signIn("credentials", {
        email,
        password,
      });
      registerModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, userName, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="userName"
        type="text"
        onChange={(e) => setuserName(e.target.value)}
        value={userName}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Email"
        type="email"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        required={true}
      />
    </div>
  );

  const footerContent = (
    <div className=" text-blue_ct-tintiest_ct text-center mt-4 ">
      <p>
        Already have an account?{" "}
        <span
          className="text-white_Ct cursor-pointer hover:underline"
          onClick={onToggle}
        >
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
