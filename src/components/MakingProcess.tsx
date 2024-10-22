import Image from "next/image";
import React from "react";
import Page from "../app/assets/images/page.png";
import Video from "../app/assets/images/video.png";

const MakingProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-10 flex flex-col justify-center items-center gap-10 mt-10">
      <div>
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 -ml-2"></div>
        <h2 className="text-center text-3xl font-bold mb-8">MAKING PROCESS</h2>
      </div>

      {/* Responsive Container for Both Cards */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center gap-8">
        {/* Left Section - 일반 제작 */}
        <div className="bg-[#141414] rounded-[40px] p-10 w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">일반 제작</h2>
          <p className="text-gray-400 mb-10">제작 시작 후 5영업일 이내</p>

          <div className="space-y-6 w-full">
            {[
              {
                step: "STEP1",
                title: "사전 논의",
                desc: "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
              },
              {
                step: "STEP2",
                title: "영상 기획",
                desc: "스토리보드 전달&수정을 통한 기획안 확정 가상인간 발화용 스크립트 작성과 프롭프팅",
              },
              {
                step: "STEP3",
                title: "영상 생성",
                desc: "작성한 스크립트로 가상인간 영상 생성 그의 이미지, 배경 음악 등 필요 요소 생성",
              },
              {
                step: "STEP4",
                title: "영상 편집",
                desc: "영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성",
              },
              {
                step: "STEP5",
                title: "최종 납품",
                desc: "고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회 제공",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex rounded-full bg-black p-6 items-start gap-10 border border-gray-500"
              >
                <div>
                  <div className="text-[#FF5A78] text-sm font-semibold mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold mb-1">{item.title}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Ploonet Quickserve */}
        <div className="relative p-[2px] bg-gradient-to-r from-pink-500 to-orange-400 rounded-[40px] w-full lg:w-1/2 flex flex-col items-center">
          {/* Inner Content */}
          <div className="bg-[#1C1C1C] rounded-[40px] p-10 w-full flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Ploonet Quickserve™
            </h2>
            <p className="text-gray-400 mb-10">제작 시작 후 12~48시간 이내</p>

            <div className="space-y-12 w-full">
              {[
                {
                  id: 1,
                  title: "제작 안내",
                  description:
                    "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
                  icon: Page,
                },
                {
                  id: 2,
                  title: "영상 생성",
                  description:
                    "스크립트 수신 즉시 가상인간 영상 생성 그 외 이미지, 배경 음악 등 필요 요소 생성",
                  icon: Video,
                },
                {
                  id: 3,
                  title: "편집 및 납품",
                  description: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
                  icon: Video,
                },
              ].map((step) => (
                <div key={step.id} className="flex items-start mb-8">
                  {/* Step Icon */}
                  <div className="flex-shrink-0 w-32 h-32 flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg text-lg text-white gap-2">
                    <div>{`STEP${step.id}`}</div>
                    <div>
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  {/* Step Details */}
                  <div
                    className={`mt-4 ml-4 pb-20 ${
                      step.id < 3 && "border-gray-500 border-b-2"
                    }`}
                  >
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Text */}
      <div className="text-[#999999] text-xs">
        <p>
            * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p>
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default MakingProcess;
