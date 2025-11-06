import WhackList from "../WhackList";
import TitleText from "../TitleText";
import { RoomProps } from "../../types";
import SaveList from "../SaveList";
import DetectList from "../DetectList";

export default function Night({ thisRoom }: RoomProps) {
  return (
    <>
      <TitleText text="Night has fallen..." />

      <p className="text-6xl py-8">🌕</p>
      <hr className="border-terminalAccent" />

      <div className="py-8 text-terminalFg font-mono">
        {thisRoom.state.players.get(thisRoom.sessionId)?.role === 0 ? (
          <>
            <p>Choose who to assassinate.</p>
            <WhackList thisRoom={thisRoom} />
          </>
        ) : null}
        {thisRoom.state.players.get(thisRoom.sessionId)?.role === 1 ? (
          <div className="text-left">
            <p>
              Focus your attention to your screen. Hide the contents of your
              screen. Tap your phone occasionally. Pretend to scroll
              occasionally.
            </p>
          </div>
        ) : null}
        {thisRoom.state.players.get(thisRoom.sessionId)?.role === 2 ? (
          <>
            <p>Choose who to save</p>
            <SaveList thisRoom={thisRoom} />
          </>
        ) : null}
        {thisRoom.state.players.get(thisRoom.sessionId)?.role === 3 ? (
          <>
            <p>Choose who to investigate</p>
            <DetectList thisRoom={thisRoom} />
          </>
        ) : null}
      </div>
    </>
  );
}
