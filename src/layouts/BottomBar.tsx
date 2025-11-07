import { useState, useEffect, useMemo } from "react";
import InfoModal from "../components/InfoModal";
import ChatModal from "../components/ChatModal";
import { PhaseType } from "../types";
import { useGame } from "../GameContext";

type BottomBarProps = {
  handleNext: () => void;
  buttonClicked: boolean;
};

export default function BottomBar({
  handleNext,
  buttonClicked,
}: BottomBarProps) {
  const [showButton, setShowButton] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [buttonWaitingText, setButtonWaitingText] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const game = useGame();
  console.log("game?", game);

  const aliveCount = useMemo(
    () => Array.from(game.players.values()).filter((p) => p.alive).length,
    [game.players]
  );

  const confirmedCount = useMemo(
    () => Array.from(game.players.values()).filter((p) => p.confirmed).length,
    [game.players]
  );

  const currentPlayer = game.players.get(game.sessionId);
   const playerCount = game.players.size;
  const minClients = game.minClients;

 useEffect(() => {
   if (game.phase === PhaseType.LOBBY) {
     setShowButton(true);
     if (playerCount < minClients) {
       const deficit = minClients - playerCount;
       setButtonText(`Need ${deficit} players...`);
     } else {
       setButtonText("Start Game");
     }
     if (!currentPlayer?.room_owner) {
       setShowButton(false);
     }
   } else if (game.phase === PhaseType.INTRODUCTION) {
     setShowButton(true);
     setButtonText("OK");
   } else if (game.phase === PhaseType.NIGHT) {
     setIsButtonDisabled(true);
     setButtonText("Waiting for morning");
   } else if (game.phase === PhaseType.NARRATIONMORNING) {
     setIsButtonDisabled(false);
     setShowButton(true);
     setButtonText("Skip to Vote");
   } else if (game.phase === PhaseType.VOTING) {
     setIsButtonDisabled(true);
     setButtonText("Vote");
   } else if (game.phase === PhaseType.NARRATIONLYNCHING) {
     setIsButtonDisabled(false);
     setButtonText("Next Room");
   } else if (game.phase === PhaseType.CONCLUSION) {
     setShowButton(false);
   }
 }, [game.phase, playerCount, currentPlayer?.room_owner, minClients]);

  useEffect(() => {
    setButtonWaitingText(
      `Waiting for ${aliveCount - confirmedCount} others...`
    );
    if (aliveCount - confirmedCount === 1) {
      const waitingPlayer = Array.from(game.players.values()).find(
        (p) => !p.confirmed && p.alive
      );
      if (waitingPlayer) {
        setButtonWaitingText(`Waiting for ${waitingPlayer.name}`);
      }
    }
  }, [confirmedCount, aliveCount, game.players]);

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
    <div className="fixed bottom-0 w-full bg-black border-t border-terminalAccent py-4">
      <div className="flex justify-center align-baseline">
        {showButton && (
          <button
            className={`w-full max-w-md border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleNext()}
            disabled={isButtonDisabled}
          >
            {buttonClicked ? buttonWaitingText : buttonText}
          </button>
        )}
        <button
          className="absolute -top-12 right-0 bg-black border border-terminalAccent border-b-0 p-2 hover:bg-terminalAccent hover:text-black transition-all duration-150"
          onClick={() => handleOpenChatModal()}
        >
          <img className="w-8" src="./images/chat.webp" alt="chat" />
        </button>
        <button
          className="absolute -top-12 left-0 bg-black border border-terminalAccent border-b-0 p-2 hover:bg-terminalAccent hover:text-black transition-all duration-150"
          onClick={() => handleOpenInfoModal()}
        >
          <img className="w-8" src="./images/info.png" alt="info" />
        </button>
      </div>
      <InfoModal
        isOpen={isInfoModalOpen}
        handleCloseModal={handleCloseInfoModal}
      />
      <ChatModal
        isOpen={isChatModalOpen}
        handleCloseModal={handleCloseChatModal}
      />
    </div>
  );
}
