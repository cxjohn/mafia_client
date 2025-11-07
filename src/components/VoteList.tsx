import { useState } from "react";
import { useGame } from "../GameContext";

export default function VoteList() {
  const game = useGame();
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");

  const handleVote = (target: string) => {
    setClicked(true);
    setSelected(target);
    game.send("voteForLynch", target);
  };

  return (
    <ul className="my-8">
      {Array.from(game.players.entries()).map(([sessionId, player]) => {
        if (sessionId !== game.sessionId && player.alive) {
          return (
            <li key={sessionId}>
              <button
                onClick={() => handleVote(sessionId)}
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
    </ul>
  );
}
