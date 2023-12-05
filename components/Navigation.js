import React from "react";
import Button from "./Button";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className="bg-gray-800 body-font">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0"
        >
          <Image
            src="/BuyitOut.svg"
            width={100}
            height={20}
            alt="Picture of the author"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <Button
          isLink
          isLarge
          buttonText="Profile"
          href="/admin"
          className="logoColor"
        />
      </div>
    </header>
  );
};

export default Navigation;
