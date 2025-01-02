// "use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void; // Optional for read-only mode
  readOnly?: boolean; // New prop for read-only mode
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange, readOnly = false }) => {
  const handleClick = (index: number) => {
    if (!readOnly && onChange) {
      onChange(index + 1); // Stars are zero-indexed, so add 1
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer ${
            index < value ? "text-yellow-400" : "text-gray-300"
          } ${readOnly ? "cursor-default" : ""}`}
          size={24}
        />
      ))}
    </div>
  );
};

export default StarRating;
