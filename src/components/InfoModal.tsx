import { useState, useEffect, useCallback } from "react";
import Modal from "./Modal";
import { ModalContentProps } from "../types";

export default function InfoModal({
  isOpen,
  handleCloseModal,
  thisRoom,
}: ModalContentProps) {
  const [mafiaCount, setMafiaCount] = useState(0);
  const [townspersonCount, setTownspersonCount] = useState(0);

  const countRoles = useCallback(
    (role: number) => {
      let count = 0;
      Object.values(
        Object.fromEntries(thisRoom.state.players["$items"])
      ).forEach((item) => {
        if (item.role === role) {
          count++;
        }
      });
      return count;
    },
    [
      thisRoom.state.players,
      Object.values(Object.fromEntries(thisRoom.state.players["$items"])),
    ]
  );

  const handleDispose = () => {
    thisRoom?.send("kill");
  };

  useEffect(() => {
    setMafiaCount(countRoles(0));
    setTownspersonCount(countRoles(1));
  }, [thisRoom.state.players, countRoles]);

  return (
    <Modal isOpen={isOpen} direction="left">
      <div>
        <div className="flex justify-between items-center border-b border-terminalAccent pb-4">
          <h5 className="text-4xl font-mono text-terminalFg">Roles</h5>

          <button onClick={handleCloseModal} className="close text-terminalFg hover:text-terminalAlert transition-colors">
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
            <div className="text-center pt-2 text-terminalFg font-mono">x{mafiaCount}</div>
          </div>
          <div className="flex-col">
            <div className="bg-black border border-terminalAccent py-2">
              <div className="text-center text-terminalFg font-mono">townie</div>
              <img
                className="w-20 mx-auto"
                src="./images/town.webp"
                alt="townie icon"
              />
            </div>
            <div className="text-center pt-2 text-terminalFg font-mono">x{townspersonCount}</div>
          </div>
        </div>

        <hr className="border-terminalAccent" />
        <div className="flex flex-col justify-between">
          <h5 className="text-4xl font-mono text-terminalFg pt-8">Rules</h5>
          <div className="text-xl text-terminalFg font-mono">
            <p className="py-4">
              The Townspeople win when all the mafia are dead
            </p>
            <p>The Mafia win when all the Townspeople are dead</p>
          </div>
        </div>
      </div>
      <button onClick={handleDispose} className="text-terminalAlert text-xs font-mono hover:underline">
        Please don't click this
      </button>
    </Modal>
  );
}
