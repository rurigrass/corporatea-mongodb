"use client";

import Avatar from "./Avatar";
import { SafeUser } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

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

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4">
      <div className=" bg-blue_ct-normal_ct rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div className="flex flex-row gap-4" key={user.id}>
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className=" text-gray_ct-grayer_ct text-sm">
                  @{user.userName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
