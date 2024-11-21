import { create } from "zustand";

type PostStore = {
  postId: string | null;
  onOpen: (postId: string) => void;
  onClose: () => void;
};

export const usePost = create<PostStore>((set) => ({
  postId: null,
  onOpen: (postId: string) => set({ postId }),
  onClose: () => set({ postId: null }),
}));
