import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useTranslations } from "next-intl";
import { ServiceCard } from "./service-card";

type ServiceType = {
  _id: string;
  slug: { _type: string; current: "string" };
  title: { ru: string; en: string; kor: string };
  short: { ru: string; en: string; kor: string };
  image: SanityImageSource;
};

interface Props {
  services: ServiceType[];
}

export const Services = ({ services }: Props) => {
  const t = useTranslations("HomePage");

  return (
    <section className="flex flex-col gap-4 py-20 items-center overflow-hidden">
      <h2 className="tag">{t("services_title")}</h2>
      <div className="max-w-[765px] px-4">
        <p className="text-center">{t("services_description")}</p>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        {services.map((service) => (
            <ServiceCard data={service} key={service._id}/>
        ))}
      </div>
    </section>
  );
};
