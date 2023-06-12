// import Modal from "@/components/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Banner from "@/components/Banner";
import LoginModal from "@/components/modals/LoginModal";
import FollowBar from "@/components/FollowBar";
import { SafeUser } from "../types"; // Import User type from your types.ts file
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  
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
