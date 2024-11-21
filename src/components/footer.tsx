import { Link } from "@/i18n/routing";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {FaSquarePhone} from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className="p-6 px-20 flex flex-col gap-4">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
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
        </div>

        <div className="flex items-center">
          <Link href="tel:+1234567890" className="flex items-center">
            <FaSquarePhone className="size-6 mr-2" />
            <span className="font-semibold">+1 (234) 567-890</span>
          </Link>
        </div>
      </div>

      <p className="text-center text-gray-600 text-sm">© All rights reserved by me</p>
    </footer>
  );
};
