import { SafeUser } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {
  return useQuery(["users"], {
    queryFn: async () => {
      const { data } = await axios.get("/api/users");
      return data as SafeUser[];
    },
  });
};

export default useUsers;
