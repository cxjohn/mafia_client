import { useState, useEffect } from "react";
import InfoModal from "../components/InfoModal";
import ChatModal from "../components/ChatModal";
import { PhaseType } from "../components/Phase";
import { RoomType } from "../types";

type BottomBarProps = {
  phase: PhaseType;
  handleNext: () => void;
  buttonClicked: boolean;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: RoomType;
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
  aliveCount,
  confirmedCount,
}: BottomBarProps) {
  const [showButton, setShowButton] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [buttonWaitingText, setButtonWaitingText] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (phase === PhaseType.LOBBY) {
      let deficit = 0;
      setShowButton(true);
      if (
        Object.keys(Object.fromEntries(thisRoom.state.players)).length <
        thisRoom.state.minClients
      ) {
        deficit =
          thisRoom.state.minClients -
          Object.keys(Object.fromEntries(thisRoom.state.players)).length;
        setButtonText(`Need ${deficit} players...`);
      } else {
        setButtonText("Start Game");
      }
      //@ts-ignore
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
      setShowButton(false);
    }
  }, [
    phase,
    thisRoom.state.players,
    thisRoom.sessionId,
    Object.keys(Object.fromEntries(thisRoom.state.players)),
    thisRoom.state.minClients,
  ]);

  useEffect(() => {
    setButtonWaitingText(
      `Waiting for ${aliveCount - confirmedCount} others...`
    );
    if (aliveCount - confirmedCount === 1) {
      let name = "";
      //@ts-ignore
      for (let player of thisRoom.state.players.values()) {
        if (player.confirmed === false && player.alive) {
          name = player.name;
        }
      }
      setButtonWaitingText(`Waiting for ${name}`);
    }
  }, [confirmedCount, aliveCount, thisRoom.state.players]);

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
    <div className="fixed bottom-0 w-full bg-secondaryBg py-4">
      <div className="flex justify-center align-baseline">
        {showButton && (
          <button
            className={`w-full max-w-md rounded p-4 ${
              isButtonDisabled ? "bg-primaryBg" : "bg-secondaryText"
            }`}
            onClick={() => handleNext()}
            disabled={isButtonDisabled}
          >
            {buttonClicked ? buttonWaitingText : buttonText}
          </button>
        )}
        <button
          className="absolute -top-12 right-0 bg-secondaryBg rounded-tl-xl p-2"
          onClick={() => handleOpenChatModal()}
        >
          <img className="w-8" src="./images/chat.webp" alt="chat" />
        </button>
        <button
          className="absolute -top-12 left-0 bg-secondaryBg rounded-tr-xl p-2"
          onClick={() => handleOpenInfoModal()}
        >
          <img className="w-8" src="./images/info.png" alt="info" />
        </button>
      </div>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleCloseModal={handleCloseInfoModal}
        thisRoom={thisRoom}
      />
      <ChatModal
        isOpen={isChatModalOpen}
        handleCloseModal={handleCloseChatModal}
        message={message}
        messages={messages}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
        thisRoom={thisRoom}
      />
    </div>
  );
}
