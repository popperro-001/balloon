"use client";

import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/routing";
import { Select } from "./ui/select";
import { useMobileNav } from "@/hooks/use-mobile-nav";

interface Props {
  children: ReactNode;
  defaultValue: string;
}

export const LocaleSwitcherSelect = ({ children, defaultValue }: Props) => {
  const router = useRouter();
  const { onClose } = useMobileNav();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (value: string) => {
    const nextLocale = value;

    startTransition(() => {
      router.replace(
        //@ts-ignore
        { pathname, params },
        { locale: nextLocale }
      );
    });

    onClose();
  };

  return (
    <div className="w-[150px]">
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onValueChange={onSelectChange}
      >
        {children}
      </Select>
    </div>
  );
};
