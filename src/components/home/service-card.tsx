import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useLocale } from "next-intl";

import { urlFor } from "@/sanity/lib/image";
import { Link } from "@/i18n/routing";

type ServiceType = {
  _id: string;
  slug: { _type: string; current: "string" };
  title: { ru: string; en: string; kor: string };
  short: { ru: string; en: string; kor: string };
  image: SanityImageSource;
};

interface Props {
  data: ServiceType;
}

export const ServiceCard = ({ data }: Props) => {
  const locale = useLocale();
  const serviceImageUrl = data.image
    ? urlFor(data.image)?.width(320).height(460).url()
    : null;

  return (
    <Link href={`/services/${data._id}`}>
      <div className="w-[320px] h-[460px] overflow-hidden rounded-2xl relative group transition-transform duration-500 hover:scale-105 shadow-md">
        {serviceImageUrl && (
          <Image
            src={serviceImageUrl}
            alt={data.slug.current}
            width={320}
            height={460}
            className="rounded-2xl"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white bg-black/40 px-10 py-4 rounded-full text-lg font-semibold border border-white">{data.title[locale as "en" | "ru" | "kor"]}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 w-full p-4 text-center text-white text-lg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          {data.short[locale as "en" | "ru" | "kor"]}
        </div>
      </div>
    </Link>
  );
};
