import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full align-baseline p-4 flex flex-col md:flex-row items-center justify-between md:text-xs bg-gray-100 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-2 md:mb-0">
        © 2023{" "}
        <a href="#" className="hover:underline">
          BuyItOut
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className="mb-2 md:mb-0 md:me-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>

        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
