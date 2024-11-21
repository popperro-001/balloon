import { useLocale, useTranslations } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select";
import { routing } from "@/i18n/routing";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";

const flags = {
  en: (
    <Image
      src="/GB.svg"
      alt="EN"
      width={20}
      height={20}
      className=" mr-2"
    />
  ),
  ru: (
    <Image
      src="/RU.svg"
      alt="RU"
      width={20}
      height={20}
      className=" mr-2"
    />
  ),
  kor: (
    <Image
      src="/KR.svg"
      alt="KR"
      width={20}
      height={20}
      className=" mr-2"
    />
  ),
};

export const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      <SelectTrigger className="border-none bg-transparent text-base">
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem value={cur} key={cur} className="text-base">
            <div className="flex">
              {flags[cur]}
              <p className="font-semibold">{t("locale", { locale: cur })}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </LocaleSwitcherSelect>
  );
};
