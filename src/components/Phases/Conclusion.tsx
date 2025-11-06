import { useMemo } from "react";
import { useGame } from "../../GameContext";
import { Role } from "../../types/Player";

export default function Conclusion() {
  const game = useGame();

  const mafiaWin = useMemo(
    () =>
      Array.from(game.players.values()).some(
        (p) => p.role === Role.MAFIA && p.alive
      ),
    [game.players]
  );

  const handleLeave = () => {
    game.send("kill");
    localStorage.removeItem("roomId");
    localStorage.removeItem("sessionId");
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-between h-[75vh] text-terminalFg font-mono">
      <div className="text-4xl text-terminalAccent animate-flicker">
        {mafiaWin ? "Mafia" : "Townspeople"} win!
      </div>
      <button
        onClick={handleLeave}
        className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer"
      >
        Leave
      </button>
    </div>
  );
}
