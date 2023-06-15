"use client";

import Avatar from "./Avatar";
import { SafeUser } from "../types";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useUsers from "@/hooks/useUsers";

const FollowBar = () => {
  const { data: users, isLoading, error } = useUsers();

  if (!users) {
    return null;
  }

  return (
    <div className="px-6 py-4">
      <div className=" bg-blue-normal rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div className="flex flex-row gap-4" key={user.id}>
              <Suspense fallback={<p>loading...</p>}>
                <Avatar userId={user.id} />
              </Suspense>
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className=" text-gray-grayer_ct text-sm">@{user.userName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
