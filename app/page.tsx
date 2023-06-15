// import Modal from "@/components/Modal";
import Banner from "@/components/Banner";
import FollowBar from "@/components/FollowBar";
import { SafeUser } from "../types"; // Import User type from your types.ts file
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    
  // console.log(users);
  return (
    <>
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
