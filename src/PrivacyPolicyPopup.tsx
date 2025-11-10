import { useCallback, useEffect, useState, type FC } from "react";
import ReactMarkdown from "react-markdown";
import ReactModal from "react-modal";

const PrivacyPolicyPopup: FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [content, setContent] = useState<string>();

  const getContent = useCallback(async () => {
    const response = await fetch("/privacy_policy.md");
    const content = await response.text();
    setContent(content);
  }, []);

  useEffect(() => {
    getContent();
  }, [getContent]);

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className="privacy-policy-popup-container"
    >
      <div className="privacy-policy-popup">
        <div className="privacy-policy-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="privacy-policy-popup-footer">
          <button
            className="privacy-policy-popup-close-button"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default PrivacyPolicyPopup;
