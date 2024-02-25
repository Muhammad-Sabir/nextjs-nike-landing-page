import Image from "next/image";
import React from "react";

type buttonProps = {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}: buttonProps) => {
  return (
    <button
      className={`centered-flex gap-2 rounded-full border  px-7 py-4 font-montserrat 
    text-lg leading-none 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red bg-coral-red text-white"}`}
    >
      {label}

      {iconUrl && (
        <Image
          src={iconUrl}
          alt="Button icon"
          className="ml-2 rounded-full"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;
