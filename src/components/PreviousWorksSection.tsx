import Image from "next/image";
import React from "react";
import WorkImg1 from "../app/assets/images/01.png";
import WorkImg2 from "../app/assets/images/02.png";
import WorkImg3 from "../app/assets/images/03.png";
import WorkImg4 from "../app/assets/images/04.png";
import WorkImg5 from "../app/assets/images/05.png";
import WorkImg6 from "../app/assets/images/06.png";
import WorkImg7 from "../app/assets/images/07.png";
import WorkImg8 from "../app/assets/images/08.png";
import WorkImg9 from "../app/assets/images/09.png";
import WorkImg10 from "../app/assets/images/10.png";
import WorkImg11 from "../app/assets/images/11.png";
import WorkImg12 from "../app/assets/images/12.png";

const PreviousWorksSection = () => {
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 -ml-2"></div>
          <h2 className="text-center text-3xl font-bold mb-8">
            PREVIOUS WORKS
          </h2>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {[
          WorkImg1,
          WorkImg2,
          WorkImg3,
          WorkImg4,
          WorkImg5,
          WorkImg6,
          WorkImg7,
          WorkImg8,
          WorkImg9,
          WorkImg10,
          WorkImg11,
          WorkImg12,
        ].map((workImg, idx) => (
          <div key={idx} className="w-full h-auto">
            <Image
              src={workImg}
              alt={`workImg${idx + 1}`}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWorksSection;
