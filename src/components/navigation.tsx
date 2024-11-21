"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { SERVICES_TITLES } from "@/sanity/lib/queries";
import { useMobileNav } from "@/hooks/use-mobile-nav";

type ServiceTitle = {
  _id: string;
  slug: { _type: string; current: "string" };
  title: { ru: string; en: string; kor: string };
};

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  const [titles, setTitles] = useState<ServiceTitle[]>([]);
  const { onClose } = useMobileNav();
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const fetchData = async () => {
    const data = await client.fetch(SERVICES_TITLES);
    if (data) {
      setTitles(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!titles) return null;

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-base font-semibold">
              {t("services")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="min-w-[200px] flex flex-col gap-3 p-4 ">
                {titles.map((title) => (
                  <Link
                    href={`/services/${title._id}`}
                    key={title._id}
                    onClick={() => onClose()}
                  >
                    {title.title[locale as "en" | "ru" | "kor"]}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link href="/calculator" onClick={() => onClose()}>
        <span className="text-base font-semibold">{t("calculator")}</span>
      </Link>
    </div>
  );
};
