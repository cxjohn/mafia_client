import { useGame } from "../GameContext";

export default function Time() {
  let game = useGame()
  let time = game.time;
  return (
    <span className="text-[160px] leading-[160px] font-mono text-terminalFg py-8">
      {time ? new Date(time * 1000).toISOString().substr(15, 4) : "4:00"}
    </span>
  );
}
