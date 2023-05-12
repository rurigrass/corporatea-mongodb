import { create } from "zustand";

interface ILoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClosed: () => void;
}

const useLoginModal = create<ILoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClosed: () => set({ isOpen: false }),
}));

export default useLoginModal;
