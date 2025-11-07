import { useGame } from "../../GameContext";
import WhackList from "../WhackList";
import TitleText from "../TitleText";
import SaveList from "../SaveList";
import DetectList from "../DetectList";
import { Role } from "../../types/Player";

export default function Night() {
  const game = useGame();
  const currentPlayer = game.players.get(game.sessionId);
  const role = currentPlayer?.role;
  return (
    <>
      <TitleText text="Night has fallen..." />

      <p className="text-6xl py-8">🌕</p>
      <hr className="border-terminalAccent" />

      <div className="py-8 text-terminalFg font-mono">
        {role === Role.MAFIA && (
          <>
            <p>Choose who to assassinate.</p>
            <WhackList />
          </>
        )}
        {role === Role.TOWNSPERSON && (
          <div className="text-left">
            <p>
              Focus your attention to your screen. Hide the contents of your
              screen. Tap your phone occasionally. Pretend to scroll
              occasionally.
            </p>
          </div>
        )}
        {role === Role.ANGEL && (
          <>
            <p>Choose who to save</p>
            <SaveList />
          </>
        )}
        {role === Role.DETECTIVE && (
          <>
            <p>Choose who to investigate</p>
            <DetectList />
          </>
        )}
      </div>
    </>
  );
}
