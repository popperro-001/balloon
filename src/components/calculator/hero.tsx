import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("CalculatorPage");

  return (
    <section className="pink_container !min-h-[230px]">
      <h1 className="uppercase text-white p-4 bg-black text-3xl font-bold text-center">
        {t("title")}
      </h1>
      <p className="max-w-[756px] mt-10 px-2 text-center text-white text-base font-semibold">
        {t("description")}
      </p>
    </section>
  );
};
