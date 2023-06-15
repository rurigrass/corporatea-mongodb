// import Modal from "@/components/Modal";
import Banner from "@/components/Banner";
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
