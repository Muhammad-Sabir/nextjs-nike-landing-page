import { star } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

type ReviewCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="centered-flex flex-col">
      <Image
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover"
        width={120}
        height={120}
      />

      <p className="info-text mt-6 max-w-sm gap-2.5 text-center">{feedback}</p>
      <div className="centered-flex mt-3 gap-2">
        <Image src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-1 font-palanquin text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
