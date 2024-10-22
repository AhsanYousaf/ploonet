import React from "react";

interface SelectArrowSvgProps {
  width?: number;
  height?: number;
}

const SelectArrowSvg: React.FC<SelectArrowSvgProps> = ({
  width = 18,
  height = 12,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L12 12L22 2"
        stroke="url(#paint0_linear_258_51)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_258_51"
          x1="2"
          y1="2"
          x2="10"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4E83" />
          <stop offset="1" stopColor="#FFBB54" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SelectArrowSvg;
