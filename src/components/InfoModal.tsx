import { useMemo } from "react";
import Modal from "./Modal";
import { useGame } from "../GameContext";
import { Role } from "../types/Player";
import { ModalContentProps } from "../types";

export default function InfoModal({
  isOpen,
  handleCloseModal,
}: ModalContentProps) {
  const game = useGame();

  const players = useMemo(
    () => Array.from(game.players.values()),
    [game.players]
  );

  const mafiaCount = useMemo(
    () => players.filter((p) => p.role === Role.MAFIA).length,
    [players]
  );

  const townspersonCount = useMemo(
    () => players.filter((p) => p.role === Role.TOWNSPERSON).length,
    [players]
  );

  const angelCount = useMemo(
    () => players.filter((p) => p.role === Role.ANGEL).length,
    [players]
  );

  const detectiveCount = useMemo(
    () => players.filter((p) => p.role === Role.DETECTIVE).length,
    [players]
  );

  const handleDispose = () => {
    game.send("kill");
    window.location.reload();
  };

  const postLobby = game.phase > 0;

  return (
    <Modal isOpen={isOpen} direction="left">
      <div className="overflow-y-auto">
        <div className="flex justify-between items-center border-b border-terminalAccent pb-4">
          <h5 className="text-4xl font-mono text-terminalFg">Roles</h5>
          <button
            onClick={handleCloseModal}
            className="close text-terminalFg hover:text-terminalAlert transition-colors"
          >
            <span className="text-6xl">×</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-12 py-4">
          <div className="flex-col">
            <div className="bg-black border border-terminalAccent py-2">
              <div className="text-center text-terminalFg font-mono">mafia</div>
              <img
                className="w-20 mx-auto"
                src="./images/mafia.webp"
                alt="mafia icon"
              />
            </div>
            <div className="text-center pt-2 text-terminalFg font-mono">
              {postLobby ? "x" + mafiaCount : "TBD"}
            </div>
          </div>
          <div className="flex-col">
            <div className="bg-black border border-terminalAccent py-2">
              <div className="text-center text-terminalFg font-mono">
                townie
              </div>
              <img
                className="w-20 mx-auto bg-white"
                src="./images/town.webp"
                alt="townie icon"
              />
            </div>
            <div className="text-center pt-2 text-terminalFg font-mono">
              {postLobby ? "x" + townspersonCount : "TBD"}
            </div>
          </div>
          <div className="flex-col">
            <div className="bg-black border border-terminalAccent py-2">
              <div className="text-center text-terminalFg font-mono">angel</div>
              <img
                className="w-20 mx-auto bg-white"
                src="./images/angel.webp"
                alt="townie icon"
              />
            </div>
            <div className="text-center pt-2 text-terminalFg font-mono">
              {postLobby ? "x" + angelCount : "TBD"}
            </div>
          </div>
          <div className="flex-col">
            <div className="bg-black border border-terminalAccent py-2">
              <div className="text-center text-terminalFg font-mono">
                detective
              </div>
              <img
                className="w-20 mx-auto bg-white"
                src="./images/detective.png"
                alt="townie icon"
              />
            </div>
            <div className="text-center pt-2 text-terminalFg font-mono">
              {postLobby ? "x" + detectiveCount : "TBD"}
            </div>
          </div>
        </div>

        <hr className="border-terminalAccent" />
        <div className="flex flex-col justify-between">
          <h5 className="text-4xl font-mono text-terminalFg pt-8">Rules</h5>
          <div className="text-xl text-terminalFg font-mono">
            <p className="py-4">
              <strong>Win Conditions:</strong>
            </p>
            <p className="pb-4">
              Town (Townspeople, Angels, Detectives) wins by eliminating all
              Mafia.
            </p>
            <p className="pb-4">Mafia wins by eliminating all Town members.</p>
            <p className="py-4">
              <strong>Night Actions:</strong>
            </p>
            <p className="pb-2">• Mafia selects a target to kill</p>
            <p className="pb-2">• Angel can save one person from death</p>
            <p className="pb-2">
              • Detective can investigate one player's role
            </p>
          </div>
        </div>
      <button
        onClick={handleDispose}
        className="text-terminalAlert text-xs font-mono hover:underline mt-12"
        >
        Please don't click this
      </button>
        </div>
    </Modal>
  );
}
