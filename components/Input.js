import React from "react";
import classNames from "classnames";
const Input = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  className,
  required,
}) => {
  const inputClasses = classNames(
    "border",
    "rounded",
    "py-2",
    "px-3",
    "w-full",
    "border",
    "focus:outline-none",
    "focus:border-indigo-500",
    "focus:ring",
    "focus:ring-indigo-200",
    "focus:ring-opacity-50",
    className
  );

  const labelClasses = classNames(
    "font-medium",
    "text-gray-600",
    "py-2",
    className
  );
  return (
    <div className="mb-4">
      {label && (
        <label className={labelClasses}>
          {label} {required && <abbr>*</abbr>}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};

export default Input;
