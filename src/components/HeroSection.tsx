import Image from "next/image";
import React from "react";
import HeroImg from "../app/assets/images/heroImg.png";
import HeroBtn from "../app/assets/images/heroBtn.png";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={HeroImg}
        alt="hero background"
        layout="fill"
        objectFit="cover"
        className="z-0 w-full h-full object-cover"
        priority={true}
      />
      <div
        className="absolute z-10 top-1/3 right-10 
                     sm:top-1/2 sm:right-16 
                     lg:top-1/4 lg:right-20 
                     hidden md:block"
      >
        <Image
          src={HeroBtn}
          alt="hero button"
          width={100}
          height={100}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
