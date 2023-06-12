'use client'
// import Modal from "@/components/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Banner from "@/components/Banner";
import LoginModal from "@/components/modals/LoginModal";
// import User from "@/components/User";
import FollowBar from "@/components/FollowBar";
import getUsers from "./actions/getUsers";
import { SafeUser } from "../types"; // Import User type from your types.ts file
import { useEffect, useState } from "react";
import axios from "axios";

const Home = async () => {
  const [users, setUsers] = useState([]);
  // const users: SafeUser[] = await getUsers();
  // const users: SafeUser[] = await getUsers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  console.log(users);
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
        {/* <FollowBar users={users} /> */}
      </div>
    </>
  );
};

export default Home;
