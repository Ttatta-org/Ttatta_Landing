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
      className="w-full h-full p-6 box-border flex flex-row justify-center items-center"
    >
      <div className="max-h-[80dvh] max-w-[768px] px-6 py-4 bg-white rounded-2xl shadow-[0px_10px_10px_#00000010] flex flex-col justify-between items-center">
        <div className="overflow-y-scroll markdown-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="w-full flex justify-center items-center p-4 box-border">
          <button
            className="bg-[#ff8072] rounded-full px-8 py-2 text-white text-[16px] font-bold border-none cursor-pointer shadow-[0px_5px_5px_#00000010]"
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
