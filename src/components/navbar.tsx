"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

import { LocaleSwitcher } from "./locale-switcher";
import { MenuIcon } from "lucide-react";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Navigation } from "./navigation";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  const { onOpen } = useMobileNav();

  return (
    <nav className="pt-4 px-6 flex items-center justify-between h-20 max-w-screen-2xl w-full fixed z-40 bg-slate-50 bg-opacity-90">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={86} height={36} />
      </Link>

      <div className="flex items-center justify-between gap-2">
        <Link
          href="https://www.instagram.com/yourusername"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram className="size-6" />
        </Link>

        <Link
          href="https://www.facebook.com/yourusername"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="size-6" />
        </Link>

        <Link href="tel:+1234567890" className="hidden sm:flex items-center">
          <FaSquarePhone className="size-6 mr-2" />
          <span className="font-semibold">+1 (234) 567-890</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Navigation />
      </div>

      <div className="hidden sm:block">
        <LocaleSwitcher />
      </div>

      <div className="block sm:hidden">
        <MenuIcon
          onClick={() => {
            console.log("OPEN");
            onOpen();
          }}
        />
      </div>

      <MobileNav />
    </nav>
  );
};
