import TitleText from "../TitleText";
import { useGame } from "../../GameContext";

enum Role {
  "Mafia",
  "Townsperson",
  "Angel",
  "Detective",
}

export default function Introduction() {
  const game = useGame();
  const currentPlayer = game.players.get(game.sessionId);

  return (
    <>
      <TitleText text="Mafia!" />
      <p className="text-left py-12 text-terminalFg font-mono">
        {game.narration}
      </p>
      <p className="text-terminalAccent mt-12 font-mono">
        You are a {Role[currentPlayer?.role ?? 0]}
      </p>
    </>
  );
}
