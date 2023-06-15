import { UserProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (userId: string) => {
  return useQuery(["user"], {
    queryFn: async () => {
      const { data } = await axios.get(`/api/users/${userId}`);
      return data as UserProps;
    },
  });
};

export default useUser;
