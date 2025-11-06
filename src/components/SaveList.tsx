import { useGame } from "../GameContext";
import { Role } from "../types/Player";

export default function SaveList() {
  const game = useGame();

  const handleSave = (target: string) => {
    game.send("selectSaved", target);
  };

  return (
    <ul className="my-8">
      {Array.from(game.players.entries()).map(([sessionId, player]) => {
        if (player.role !== Role.ANGEL && player.alive) {
          return (
            <li key={sessionId}>
              <button
                onClick={() => handleSave(sessionId)}
                className="text-xl p-4 border border-terminalAccent text-terminalFg font-mono w-full hover:bg-terminalAccent hover:text-black transition-all duration-150"
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
