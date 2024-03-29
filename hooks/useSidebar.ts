import { create } from "zustand";

interface ISidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSidebar = create<ISidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSidebar;