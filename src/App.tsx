import { useState, type FC } from "react";
import "./App.css";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup";

const App: FC = () => {
  const [isPrivacyPolicyPopupOpen, setIsPrivacyPolicyPopupOpen] =
    useState(false);

  const onInquiryButtonClicked = () => {
    window.location.href =
      "mailto:2025ttatta@gmail.com?subject=따따 서비스 문의";
  };

  return (
    <div className="app-root">
      <div className="mockup-container">
        <img
          src="/assets/iphone_mock_up.png"
          alt="iphone mock up"
          className="iphone-mockup"
        />
      </div>
      <div className="center-container">
        <div className="title-container">
          <div className="title-wrapper">
            <img
              src="/assets/ttatta_icon.png"
              alt="따따 아이콘"
              className="ttatta-icon"
            />
            <img
              src="/assets/ttatta_logo.png"
              alt="따따 로고"
              className="ttatta-logo"
            />
            <h1 className="hero-title">
              어디서든 기록 가능한 위치기반 추억 기록 서비스
            </h1>
            <span className="hero-subtitle">
              사진과 위치로 나만의 추억과 발자취를 기록할 수 있는 서비스이며,
              <br />
              다른 사람의 시선을 신경 쓰지 않고 간편하게 하루하루를 남길 수 있는
              경험을 제공합니다.
            </span>
          </div>
        </div>
        <div className="inquiry-container">
          <button className="inquiry-button" onClick={onInquiryButtonClicked}>
            <div className="inquiry-button-text-container">
              <span>문의하기</span>
              <sub className="inquiry-button-sub">2025ttatta@gmail.com</sub>
            </div>
            <img
              src="/assets/arrow-right-solid-full.svg"
              style={{ width: "20px", filter: "invert(1)" }}
            />
          </button>
        </div>
        <div className="footer-container">
          <button
            className="privacy-policy-link"
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
