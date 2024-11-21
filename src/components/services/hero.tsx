import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useLocale } from "next-intl";

type ServiceType = {
  _id: string;
  slug: { _type: string; current: "string" };
  title: { ru: string; en: string; kor: string };
  short: { ru: string; en: string; kor: string };
  description: { ru: string; en: string; kor: string };
  image: SanityImageSource;
};

interface Props {
  service: ServiceType;
}

export const Hero = ({ service }: Props) => {
  const locale = useLocale();

  return (
    <section className="pink_container !min-h-[320px]">
      <div className="max-w-screen-2xl flex flex-col items-center gap-8 relative w-full">
        <h3 className="tag">{service.title[locale as "en" | "ru" | "kor"]}</h3>

        <p className="text-lg text-center sm:text-left font-semibold text-gray-300 bg-black p-4 max-w-[756px]">
          {service.description[locale as "en" | "ru" | "kor"]}
        </p>
      </div>
    </section>
  );
};
