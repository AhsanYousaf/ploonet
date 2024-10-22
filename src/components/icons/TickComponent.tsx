import React, { useState } from "react";

const TickSvgComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      style={{ cursor: "pointer" }} // Change cursor to pointer on hover
    >
      <path
        opacity={isActive ? "1" : "0.2"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM19.6425 9.75754C20.0525 10.1676 20.0525 10.8324 19.6425 11.2425L12.6425 18.2425C12.2324 18.6525 11.5676 18.6525 11.1575 18.2425L8.35754 15.4425C7.94749 15.0324 7.94749 14.3676 8.35754 13.9575C8.76759 13.5475 9.43241 13.5475 9.84246 13.9575L11.9 16.0151L15.0288 12.8863L18.1575 9.75754C18.5676 9.34749 19.2324 9.34749 19.6425 9.75754Z"
        fill={isActive ? "#00FF00" : "white"} // Change color to bright green when active
      />
    </svg>
  );
};

export default TickSvgComponent;