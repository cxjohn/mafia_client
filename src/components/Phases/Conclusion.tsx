import { useState, useEffect } from "react";
import { RoomProps } from "../../types";

interface ConclusionProps extends RoomProps {
  setThisRoom: any;
}

export default function Conclusion({ thisRoom, setThisRoom }: ConclusionProps) {
  const [mafiaWin, setMafiaWin] = useState(false);

  useEffect(() => {
    thisRoom &&
      thisRoom.state.players["$items"].forEach((player: any) => {
        if (player.role === 0 && player.alive) {
          setMafiaWin(true);
        }
      });
  }, [thisRoom]);

  const handleLeave = () => {
    thisRoom?.send("kill");
    thisRoom && localStorage.removeItem("roomId");
    thisRoom && localStorage.removeItem("sessionId");
    setThisRoom();
  };

  return (
    <div className="flex flex-col justify-between h-[75vh] text-terminalFg font-mono">
      <div className="text-4xl text-terminalAccent animate-flicker">{mafiaWin ? "Mafia" : "Townspeople"} win!</div>
      <button
        onClick={handleLeave}
        className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer"
      >
        Leave
      </button>
    </div>
  );
}
