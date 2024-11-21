import { FaSquarePhone } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "./locale-switcher";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Navigation } from "./navigation";
import { Link } from "@/i18n/routing";

export const MobileNav = () => {
  const { isOpen, onClose } = useMobileNav();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link href="tel:+1234567890" className="flex items-center">
              <FaSquarePhone className="size-6 mr-2" />
              <span className="font-semibold">+1 (234) 567-890</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center gap-8 py-10">
          <LocaleSwitcher />

          <Navigation className="flex-col items-center gap-8" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
