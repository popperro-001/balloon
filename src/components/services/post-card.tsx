"use client";

import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useTranslations } from "next-intl";

import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import { usePost } from "@/hooks/use-post-modal";

type PostType = {
  _id: string;
  _createdAt: string;
  mainImage: SanityImageSource;
};

interface Props {
  data: PostType;
}

export const PostCard = ({ data }: Props) => {
  const { onOpen } = usePost();
  const t = useTranslations("ServicePage");
  const postImageUrl = data.mainImage
    ? urlFor(data.mainImage)?.width(320).height(460).url()
    : null;

  return (
    <div
      onClick={() => onOpen(data._id)}
      className="w-[320px] h-[460px] overflow-hidden rounded-2xl relative group transition-transform duration-500 hover:scale-105 shadow-md cursor-pointer"
    >
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt="post image"
          width={320}
          height={460}
          className="rounded-2xl"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-white bg-black/40 px-10 py-4 rounded-full text-lg font-semibold border border-white">
          {t("more")}
        </span>
      </div>
      <div className="absolute top-0 right-0 bg-[#EE2B69] px-4 py-2 rounded-bl-2xl">
        <span className="text-white italic text-sm">
          {formatDate(data._createdAt)}
        </span>
      </div>
    </div>
  );
};
