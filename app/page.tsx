// import Modal from "@/components/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Banner from "@/components/Banner";
import LoginModal from "@/components/modals/LoginModal";
// import User from "@/components/User";
import FollowBar from "@/components/FollowBar";
import getUsers from "./actions/getUsers";
import { SafeUser } from "../types"; // Import User type from your types.ts file


const Home = async() => {

  // const users: SafeUser[] = await getUsers();
  const users: SafeUser[] = await getUsers()

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
        <FollowBar users={users}/>
      </div>
    </>
  );
}

export default Home