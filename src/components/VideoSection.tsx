import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div>
      <section className="bg-black text-[#AAAAAA] py-16 h-auto md:h-screen flex flex-col justify-center items-center mt-10 px-5">
        <div className="text-center mb-10">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400 text-lg font-semibold mb-2">
            영상 제작소
          </h2>
          <h3 className="text-2xl font-bold mb-8">
            당장 내일 <span className="text-white">‘고품질 맞춤 영상’</span>을
            받아보세요.
          </h3>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-2 md:flex justify-center items-center mb-16 gap-4 md:gap-8">
          {["FAST", "QUALITY", "LOW PRICE", "HIGH TECH"].map((label, idx) => (
            <div key={idx} className="text-center">
              <div className="relative w-36 md:w-44 h-36 md:h-44 rounded-full flex flex-col justify-center items-center">
                {/* Gradient border with minimal gap */}
                <div className="absolute inset-0 rounded-full p-0.5 bg-gradient-to-r from-pink-500 to-orange-400">
                  {/* Inner circle */}
                  <div className="w-full h-full bg-[#1C1C1C] rounded-full flex flex-col justify-center items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-xl md:text-2xl">
                      {label.split(" ").map((word, i) => (
                        <div key={i}>{word}</div>
                      ))}
                    </span>
                    <p className="text-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
                      {["X2", "A++", "1/2", "Gen AI"][idx]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto px-4 md:px-0">
          <h4 className="text-xl font-bold mb-4 text-white">
            AI VIDEO ON YOUR DEMAND
          </h4>
          <p className="text-gray-400 leading-relaxed mb-6">
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
            기술에 영상 전문가의 터치를 더해...
          </p>
          <p className="text-gray-400 leading-relaxed">
            가격은 절반으로, 속도는 두배로, 품질은 A++!...
          </p>
        </div>
      </section>
      <div className="fade_rule"></div>
    </div>
  );
};

export default VideoSection;
