"use client"

// import Modal from "@/components/Modal";
import Header from "@/components/layout/Header";
import LoginModal from "@/components/modals/LoginModal";

export default function Home() {
  return (
    <>
      {/* <Modal
        isOpen={true}
        onClose={() => console.log("close")}
        onSubmit={() => console.log("submit")}
        actionLabel="Submit"
        title="yoyo"
      /> */}
      <LoginModal/>
      <div className="">
        <Header />
        Hello world
      </div>
    </>
  );
}
