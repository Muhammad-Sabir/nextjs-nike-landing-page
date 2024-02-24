"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

type ShoeCardProps = {
  imgUrl: {
    thumbnail: any;
    bigShoe: string;
  };
  changeBigShoeImg: (shoe: string) => void;
  bigShoeImg: string | StaticImageData;
};

const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:size-40">
        <Image
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
