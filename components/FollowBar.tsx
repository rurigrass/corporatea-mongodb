"use client";

import getUsers from "@/app/actions/getUsers";
// import useUsers from "@/hooks/useUsers";
import Avatar from "./Avatar";
import fetcher from "@/libs/fetcher";
import { SafeUser } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

interface FollowBarProps {
  users: SafeUser[];
}

const FollowBar = () => {

  const [users, setUsers] = useState<SafeUser[]>([]);

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


  // console.log(users);

  return (
    <div className="px-6 py-4">
      <div className=" bg-blue_ct-normal_ct rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div className="flex flex-row gap-4" key={user.id}>
              {/* <Avatar userId={user.id}/> */}
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
