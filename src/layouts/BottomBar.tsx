import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import useDisclosure from "../hooks/useDisclosure";
import { PhaseType } from "../components/Phase";

type BottomBarProps = {
  phase: PhaseType;
  handleNext: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: any;
  sessionIDs: string[];
};

export default function BottomBar({
  phase,
  handleNext,
  message,
  messages,
  setMessage,
  handleSubmit,
  thisRoom,
  sessionIDs,
}: BottomBarProps) {
  const [showButton, setShowButton] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [modal, setModal] = useState("");

  useEffect(() => {
    if (phase === PhaseType.LOBBY) {
      setButtonText("Start Game");
      if (!thisRoom.state.players[thisRoom.sessionId]?.room_owner) {
        setShowButton(false);
      }
    } else if (phase === PhaseType.INTRODUCTION) {
      setShowButton(true);
      setButtonText("OK");
    } else if (phase === PhaseType.NIGHT) {
      setShowButton(true);
      setButtonText("Next Room");
    } else if (phase === PhaseType.NARRATIONMORNING) {
      setShowButton(true);
      setButtonText("Skip to Vote");
    } else if (phase === PhaseType.VOTING) {
      setButtonText("This button will be hidden");
    } else if (phase === PhaseType.NARRATIONLYNCHING) {
      setButtonText("Next Room");
    } else if (phase === PhaseType.CONCLUSION) {
      setButtonText("Play Again");
    }
  }, [phase]);

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
            {buttonText}
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
        thisRoom={thisRoom}
        sessionIDs={sessionIDs}
      />
    </div>
  );
}
