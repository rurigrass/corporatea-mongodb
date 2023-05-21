// import Modal from "@/components/Modal";
import Header from "@/components/layout/Header";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

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
        <Header />
        Hello world
      </div>
    </>
  );
}
