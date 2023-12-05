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
  fullwidth,
  className,
  handleClick,
  logoColor,
}) => {
  const buttonClasses = classNames(
    "mb-2",
    "md:mb-0",
    "px-5",
    "py-2",
    "w-100",
    "shadow-lg",
    "tracking-wider",
    isSecondary ? "text-black" : "text-white",
    "rounded-full",
    "hover:shadow-lg",
    isPrimary && "bg-green-600",
    isSecondary && "bg-white",
    isLarge ? "px-8" : "px-5",
    fullwidth && "w-100",
    "focus:outline-none",
    isPrimary && "hover:bg-green-500",
    logoColor && "text-white",
    isSecondary && "hover:bg-red-500",
    isSmall ? "text-sm" : null,
    className
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
