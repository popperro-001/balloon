import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useTranslations } from "next-intl";
import { PostCard } from "./post-card";

type PostType = {
  _id: string;
  _createdAt: string;
  mainImage: SanityImageSource;
};

interface Props {
  posts: PostType[];
}

export const ServiceGallery = ({ posts }: Props) => {
  const t = useTranslations("ServicePage");

  return (
    <section className="flex flex-col gap-4 py-10 items-center overflow-hidden min-h-[50vh]">
      <h2 className="text-3xl font-bold">{t("title")}</h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {posts.map((post) => (
          <PostCard data={post} key={post._id} />
        ))}
      </div>
    </section>
  );
};
