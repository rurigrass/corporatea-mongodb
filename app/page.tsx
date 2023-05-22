// import Modal from "@/components/Modal";
import Banner from "@/components/Banner";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

export default function Home() {
  console.log(process.platform);
  
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
        <Banner/>
        Hello world
      </div>
    </>
  );
}
