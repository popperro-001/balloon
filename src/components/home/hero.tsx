import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="pink_container relative">
      <div className="max-w-screen-2xl grid xl:grid-cols-2 grid-cols-1 gap-2">
        <div className="hidden xl:block max-w-[100%]">
          <div className="absolute h-[320px] w-[320px] rounded-full overflow-hidden -top-6 right-[50%]">
            <Image
              src="/hero_img_1.jpg"
              alt="balloon"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute h-[360px] w-[360px] rounded-full overflow-hidden xl:left-30 left-20 top-[10%]">
            <Image
              src="/hero_img_2.jpg"
              alt="balloon"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute h-[420px] w-[420px] rounded-full overflow-hidden -bottom-10 left-[20%] z-30">
            <Image
              src="/hero_img_3.jpg"
              alt="balloon"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white uppercase text-center leading-[60px]">
            {t("title")}
          </h1>
          <p className="text-lg text-center sm:text-left font-semibold text-gray-300 bg-black p-4">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
