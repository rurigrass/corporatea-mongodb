// import Modal from "@/components/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Banner from "@/components/Banner";
import LoginModal from "@/components/modals/LoginModal";
import FollowBar from "@/components/FollowBar";
import { SafeUser } from "../types"; // Import User type from your types.ts file
import { useEffect, useState } from "react";
import axios from "axios";
import getUser from "./actions/getUser";
import getUsers from "./actions/getUsers";

const Home = () => {

  // const user = await getUser('6487223c6b822ef73c9d29ce')
  // console.log("user ", user);

  // const users = await getUsers()
  // console.log("users ", users);
  
  
  // console.log(users);
  return (
    <>
      <RegisterModal />
      <LoginModal />
      {/* <Modal
        isOpen={true}
        onClose={() => console.log("close")}
        onSubmit={() => console.log("submit")}
        actionLabel="Submit"
        title="yoyo "
      /> */}
      <div className="">
        <Banner />
        Hello world
        {/* <User /> */}
        <FollowBar />
      </div>
    </>
  );
};

export default Home;
