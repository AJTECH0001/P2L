import React from "react";
import cardImage from "../assets/card-image.png";

interface CardProps {
  title: string;
  isMiddle?: boolean;
}

const Card: React.FC<CardProps> = ({ isMiddle = false }) => {
  return (
    <div
      className={`relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 ${
        isMiddle ? "md:h-[26rem]" : ""
      } flex flex-col items-center justify-end`}
    >
      {/* Card Image */}
      <img
        src={cardImage}
        alt="Card"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Card;