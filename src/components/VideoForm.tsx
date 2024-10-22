/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SelectArrowSvg from "../components/icons/arrowComponent";
import TickSvgComponent from "../components/icons/TickComponent";
import { useState } from "react";

interface VideoFormValues {
  videoType: string;
  contactPerson: string;
  email: string;
  phone: string;
  details: string;
  referenceVideo: string;
  privacyAgreement: boolean;
}

export default function VideoForm() {
  const [formValues, setFormValues] = useState<VideoFormValues>({
    videoType: "",
    contactPerson: "",
    email: "",
    phone: "",
    details: "",
    referenceVideo: "",
    privacyAgreement: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as any;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formValues);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[901px] p-8 rounded-lg shadow-lg text-white"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            영상 제작 문의
          </h1>
          <h2 className="max-w-[690px] mx-auto text-[36px] font-bold mb-8">
            영상 제작이 필요하다면,
            <span className="font-thin">지금 문의 주세요.</span>
          </h2>
          <p className="max-w-[620px] mx-auto mb-4 text-2xl font-bold text-[#eeeeeea9]">
            여러분이 필요한 영상을 빠르게 제작하기 위해 플루넷 영상제작소가 즉시
            연락 드리겠습니다.
          </p>
          <p className="text-[#666666] text-lg mb-12">henry.lim@saltlux.com</p>
        </div>

        {/* Video Type */}
        <div className="mb-4 relative">
          <select
            name="videoType"
            value={formValues.videoType}
            onChange={handleChange}
            className="w-full py-4 px-6 pr-10 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white appearance-none"
          >
            <option
              value=""
              className="focus:bg-orange-300 hover:bg-orange-200 "
            >
              영상 유형 선택
            </option>
            <option value="promotion">프로모션</option>
            <option value="advertisement">광고</option>
            <option value="IR/PR">IR/PR</option>
            <option value="other">기타</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 text-white">
            <SelectArrowSvg />
          </div>
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <input
            name="contactPerson"
            type="text"
            value={formValues.contactPerson}
            onChange={handleChange}
            className="w-full py-4 px-6 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white"
            placeholder="담당자 성함"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full py-4 px-6 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white"
            placeholder="이메일"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <input
            name="phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
            className="w-full py-4 px-6 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white"
            placeholder="휴대폰 번호"
          />
        </div>

        {/* Video Request Details */}
        <div className="mb-4">
          <textarea
            name="details"
            rows={4}
            value={formValues.details}
            onChange={handleChange}
            className="w-full py-4 px-6 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white"
            placeholder={`의뢰하실 영상내용 아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요. 고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등 영상 장르 : 홍보,프로모션/IR/프레젠테이션 등 내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.`}
          ></textarea>
        </div>

        {/* Reference Video */}
        <div className="mb-4">
          {/* <label className="block text-orange-500 mb-2">참고 영상</label> */}
          <input
            name="referenceVideo"
            type="text"
            value={formValues.referenceVideo}
            onChange={handleChange}
            className="w-full py-4 px-6 bg-fields border border-borderColorFields rounded-lg focus:outline-none focus:border-orange-500 text-white"
            placeholder="참고 영상의 링크를 기재해주세요."
          />
          <p className="text-xs ml-4 mt-3 text-[#FF6D51]">
            * 참고하려는 영상이나 유사한 영상의 링크 주소를 적어주시면 더 정확히
            안내드리겠습니다.
          </p>
        </div>

        <div className="flex items-center justify-between mt-24">
          <div className="flex gap-3 items-center mb-4">
            <TickSvgComponent />
            <span className="underline text-[#9b9a9a]">개인정보처리방침</span>
            <span className="text-[#9b9a9a] -ml-3">에 동의합니다.</span>
          </div>
          <div className="text-center flex justify-center items-center">
            <button
              type="submit"
              className=" bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none"
            >
              문의 보내기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
