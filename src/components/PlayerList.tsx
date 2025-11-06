import { useGame } from "../GameContext";

export default function PlayerList() {
  const game = useGame();

  return (
    <ol className="text-terminalFg font-mono">
      {Array.from(game.players.entries()).map(([sessionId, player]) => (
        <li
          className={`text-xl text-left list-decimal list-inside ${
            sessionId === game.sessionId
              ? "text-terminalAccent"
              : "text-terminalFg"
          } ${player.alive ? "" : "line-through text-terminalFgDim"}`}
          key={sessionId}
        >
          {player.name}
        </li>
      ))}
    </ol>
  );
}
