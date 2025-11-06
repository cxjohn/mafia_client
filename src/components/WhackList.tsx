import { useGame } from "../GameContext";
import { Role } from "../types/Player";

export default function WhackList() {
  const game = useGame();

  const handleWhack = (target: string) => {
    game.send("voteForWhack", target);
  };

  return (
    <ul className="my-8">
      {Array.from(game.players.entries()).map(([sessionId, player]) => {
        if (player.role !== Role.MAFIA && player.alive) {
          return (
            <li key={sessionId}>
              <button
                onClick={() => handleWhack(sessionId)}
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
