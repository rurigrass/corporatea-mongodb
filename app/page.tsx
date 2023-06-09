// import Modal from "@/components/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Banner from "@/components/Banner";
import LoginModal from "@/components/modals/LoginModal";
import User from "@/components/User";

export default function Home() {
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
        <User />
      </div>
    </>
  );
}
