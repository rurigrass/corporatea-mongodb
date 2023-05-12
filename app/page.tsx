import Modal from "@/components/Modal";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Modal
        isOpen={true}
        onClose={() => console.log("close")}
        onSubmit={() => console.log("submit")}
        actionLabel="waddup"
      />
      <div className="">
        <Header />
        Hello world
      </div>
    </>
  );
}
