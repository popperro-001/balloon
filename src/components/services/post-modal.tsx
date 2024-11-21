"use client";

import { usePost } from "@/hooks/use-post-modal";
import { ResponsiveModal } from "../responsive-modal";
import { PostSlider } from "./post-slider";

export const PostModal = () => {
  const { postId, onClose } = usePost();

  return (
    <ResponsiveModal open={!!postId} onOpenChange={onClose}>
      {postId && <PostSlider id={postId} />}
    </ResponsiveModal>
  );
};
