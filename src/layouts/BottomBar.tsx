import { useState, useEffect } from "react";
import InfoModal from "../components/InfoModal";
import CModal from "../components/CModal";
import useDisclosure from "../hooks/useDisclosure";
import { PhaseType } from "../components/Phase";

type BottomBarProps = {
  phase: PhaseType;
  handleNext: () => void;
  buttonClicked: boolean;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: any;
  sessionIDs: string[];
  aliveCount: number;
  confirmedCount: number;
};

export default function BottomBar({
  phase,
  handleNext,
  buttonClicked,
  message,
  messages,
  setMessage,
  handleSubmit,
  thisRoom,
  sessionIDs,
  aliveCount,
  confirmedCount,
}: BottomBarProps) {
  const [showButton, setShowButton] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [buttonWaitingText, setButtonWaitingText] = useState("");
  const [modal, setModal] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (phase === PhaseType.LOBBY) {
      let deficit = 0;
      setShowButton(true);
      if (sessionIDs.length < thisRoom.state.minClients) {
        deficit = thisRoom.state.minClients - sessionIDs.length;
        setButtonText(`Need ${deficit} players...`);
      } else {
        setButtonText("Start Game");
      }

      if (!thisRoom.state.players[thisRoom.sessionId]?.room_owner) {
        setShowButton(false);
      }
    } else if (phase === PhaseType.INTRODUCTION) {
      setShowButton(true);
      setButtonText("OK");
    } else if (phase === PhaseType.NIGHT) {
      setIsButtonDisabled(true);

      setButtonText("Waiting for morning");
    } else if (phase === PhaseType.NARRATIONMORNING) {
      setIsButtonDisabled(false);

      setShowButton(true);
      setButtonText("Skip to Vote");
    } else if (phase === PhaseType.VOTING) {
      setIsButtonDisabled(true);
      setButtonText("Vote");
    } else if (phase === PhaseType.NARRATIONLYNCHING) {
      setIsButtonDisabled(false);
      setButtonText("Next Room");
    } else if (phase === PhaseType.CONCLUSION) {
      setButtonText("Play Again");
    }
  }, [phase, thisRoom.state.players, thisRoom.sessionId, sessionIDs.length]);

  useEffect(() => {
    setButtonWaitingText(
      `Waiting for ${aliveCount - confirmedCount} others...`
    );
    if (aliveCount - confirmedCount === 1) {
      let name = "";
      for (let player of thisRoom.state.players.values()) {
        if (player.confirmed === false) {
          name = player.name;
        }
      }
      setButtonWaitingText(`Waiting for ${name}`);
    }
  }, [confirmedCount, aliveCount]);

  console.log("thisRoom.state.players.size", thisRoom.state.players.size);
  console.log("thisRoom", thisRoom);

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleOpenChatModal = () => {
    setIsChatModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);

    document.body.style.overflow = "hidden";
  };
  const handleCloseChatModal = () => {
    document.body.style.overflow = "";
    setIsChatModalOpen(false);
  };
  const handleCloseInfoModal = () => {
    document.body.style.overflow = "";
    setIsInfoModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text__shadow py-4">
      <div className="flex justify-center align-baseline">
        {showButton && (
          <button
            className={`w-full max-w-md rounded p-4 ${
              isButtonDisabled ? "bg-gray-800" : "bg-sky-700"
            }`}
            onClick={() => handleNext()}
            disabled={isButtonDisabled}
          >
            {buttonClicked ? buttonWaitingText : buttonText}
          </button>
        )}
        <button
          className="absolute -top-12 right-0 bg-black rounded-tl-xl p-2"
          onClick={() => handleOpenChatModal()}
        >
          <img className="w-8" src="./images/chat.webp" alt="chat" />
        </button>
        <button
          className="absolute -top-12 left-0 bg-black rounded-tr-xl p-2"
          onClick={() => handleOpenInfoModal()}
        >
          <img className="w-8" src="./images/info.png" alt="chat" />
        </button>
      </div>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleCloseModal={handleCloseInfoModal}
        thisRoom={thisRoom}
        sessionIDs={sessionIDs}
      />
      <CModal
        isOpen={isChatModalOpen}
        modal={modal}
        handleCloseModal={handleCloseChatModal}
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
