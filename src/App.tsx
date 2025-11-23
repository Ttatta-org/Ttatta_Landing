import { useState, type FC } from "react";

import PrivacyPolicyPopup from "./PrivacyPolicyPopup";

const App: FC = () => {
  const [isPrivacyPolicyPopupOpen, setIsPrivacyPolicyPopupOpen] =
    useState(false);

  const onInquiryButtonClicked = () => {
    window.location.href =
      "mailto:2025ttatta@gmail.com?subject=따따 서비스 문의";
  };

  return (
    <div className="w-full relative">
      <div className="absolute top-[150px] right-0">
        <img
          src="/assets/iphone_mock_up.png"
          alt="iphone mock up"
          className="pl-[50px] max-w-full box-border animate-fade-in"
        />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#fdddc100] to-[#fdddc1ff]">
          <div className="w-full max-w-[1200px] box-border p-10 flex flex-col">
            <img
              src="/assets/ttatta_icon.png"
              alt="따따 아이콘"
              className="w-[120px] mt-[400px] mb-[30px] animate-[fade-in_0.2s_ease-in-out]"
            />
            <img
              src="/assets/ttatta_logo.png"
              alt="따따 로고"
              className="w-[400px] mb-[50px] max-md:w-[300px] max-[400px]:w-[200px]"
            />
            <h1 className="text-[#ff8072] text-[32px] font-bold mb-5 break-keep max-md:text-[24px]">
              어디서든 기록 가능한 위치기반 추억 기록 서비스
            </h1>
            <span className="text-[#ff8072] text-[20px] font-medium leading-[30px] max-md:text-[12px] max-md:leading-[16px]">
              사진과 위치로 나만의 추억과 발자취를 기록할 수 있는 서비스이며,
              <br />
              다른 사람의 시선을 신경 쓰지 않고 간편하게 하루하루를 남길 수 있는
              경험을 제공합니다.
            </span>
          </div>
        </div>
        <div className="w-full min-h-[50dvh] flex flex-col justify-center items-center bg-[#fdddc1]">
          <button className="bg-[#ff9681] border-none rounded-full py-4 pl-12 pr-8 cursor-pointer shadow-[0px_10px_10px_#00000010] flex gap-5 items-center justify-center" onClick={onInquiryButtonClicked}>
            <div className="flex flex-col items-start text-white text-[20px] font-bold">
              <span>문의하기</span>
              <sub className="text-[14px] font-light leading-5">2025ttatta@gmail.com</sub>
            </div>
            <img
              src="/assets/arrow-right-solid-full.svg"
              style={{ width: "20px", filter: "invert(1)" }}
            />
          </button>
        </div>
        <div className="w-full min-h-[100px] flex flex-col justify-center items-center bg-[#ff8072]">
          <button
            className="border-none bg-none cursor-pointer text-white underline text-[14px] font-normal"
            onClick={() => setIsPrivacyPolicyPopupOpen(true)}
          >
            개인정보처리방침
          </button>
        </div>
      </div>
      {isPrivacyPolicyPopupOpen && (
        <PrivacyPolicyPopup
          onClose={() => setIsPrivacyPolicyPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
