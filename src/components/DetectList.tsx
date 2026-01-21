import { useState } from "react";
import { useGame } from "../GameContext";
import { Role } from "../types/Player";

export default function DetectList() {
  const game = useGame();
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleSelected = (target: string) => {
    setClicked(true);
    setSelected(target);
  };

  const handleFinished = (target: string) => {
    game.send("detectiveFinished", target);
    setFinished(true);
  };

  const selectedPlayer = selected ? game.players.get(selected) : null;

  return (
    <ul className="my-8">
      {Array.from(game.players.entries()).map(([sessionId, player]) => {
        if (player.role !== Role.DETECTIVE && player.alive) {
          return (
            <li key={sessionId}>
              <button
                onClick={() => handleSelected(sessionId)}
                className={`text-xl p-4 border border-terminalAccent text-terminalFg font-mono w-full ${
                  !clicked ? "hover:bg-terminalAccent hover:text-black" : ""
                } ${
                  selected === sessionId ? "bg-terminalAccent text-black" : ""
                } transition-all duration-150`}
                disabled={clicked}
              >
                {player.name}
              </button>
            </li>
          );
        }
        return null;
      })}
      <div className="my-8 text-terminalFg font-mono">
        {selectedPlayer && (
          <>
            {selectedPlayer.name}
            {selectedPlayer.role === Role.MAFIA ? " is Mafia" : " is not Mafia"}
          </>
        )}
      </div>
      <button
        onClick={() => handleFinished(selected)}
        className={`border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono ${finished ? "bg-terminalAccent text-black" : "cursor-pointer"}`}
        disabled={finished}
      >
        Finish detecting
      </button>
    </ul>
  );
}
