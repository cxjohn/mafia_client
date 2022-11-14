import { useState } from "react";
import Modal from "../components/Modal";
import useDisclosure from "../hooks/useDisclosure";

type BottomBarProps = {
  handleNext: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function BottomBar({
  handleNext,
  message,
  messages,
  setMessage,
  handleSubmit,
}: BottomBarProps) {
  const [showButton, setShowButton] = useState(true);
  const [modal, setModal] = useState("");

  let buttonText = () => {
    return "Next Room";
  };

  const { isOpen, close: closeModal, open: openModal } = useDisclosure(false);

  const handleOpenModal = (modal: any) => {
    setModal(modal);
    openModal();
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    document.body.style.overflow = "";
    closeModal();
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text__shadow py-4">
      <div className="flex justify-center align-baseline">
        {showButton && (
          <button
            className="w-full max-w-md rounded bg-sky-700 p-4"
            onClick={() => handleNext()}
          >
            {buttonText()}
          </button>
        )}
        <button
          className="absolute -top-12 right-0 bg-black rounded-tl-xl p-2"
          onClick={() => handleOpenModal("chat")}
        >
          <img className="w-8" src="./images/chat.webp" alt="chat" />
        </button>
        <button
          className="absolute -top-12 left-0 bg-black rounded-tr-xl p-2"
          onClick={() => handleOpenModal("info")}
        >
          <img className="w-8" src="./images/info.png" alt="chat" />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        modal={modal}
        handleCloseModal={handleCloseModal}
        message={message}
        messages={messages}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
