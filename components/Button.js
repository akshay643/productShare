import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({
  buttonText,
  isLink,
  isPrimary,
  href,
  isSecondary,
  isLarge,
  type,
  isSmall,
  handleClick,
}) => {
  const buttonClasses = classNames(
    "mb-2",
    "md:mb-0",
    "px-5",
    "py-2",
    "shadow-lg",
    "tracking-wider",
    isSecondary ? "text-black" : "text-white",
    "rounded-full",
    "hover:shadow-lg",
    isPrimary && "bg-green-600",
    isSecondary && "bg-white",
    isLarge ? "px-8" : "px-5",
    "focus:outline-none",
    isPrimary && "hover:bg-green-500",
    isSecondary && "hover:bg-red-500",
    isSmall ? "text-sm" : null
  );

  return (
    <>
      {isLink ? (
        <Link href={`${href}`} className={buttonClasses}>
          {" "}
          {buttonText}{" "}
        </Link>
      ) : (
        <button
          href="/dashboard"
          className={buttonClasses}
          type={type}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      )}
    </>
  );
};

export default Button;
