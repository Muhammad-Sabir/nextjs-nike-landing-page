import Image from "next/image";
import React from "react";

type buttonProps = { label: string; iconUrl?: string };

const Button = ({ label, iconUrl }: buttonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat 
    text-lg leading-none text-white"
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
