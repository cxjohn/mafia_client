import WhackList from "../WhackList";
import TitleText from "../TitleText";
import { RoomProps } from "../../types";

export default function Night({ thisRoom }: RoomProps) {
  return (
    <>
      <TitleText text="Night has fallen..." />

      <p className="text-6xl py-8">🌕</p>
      <hr />

      <div className="py-8">
        {/* @ts-ignore */}
        {thisRoom.state.players[thisRoom.sessionId]?.role === 0 ? (
          <>
            <p>Choose who to assassinate.</p>
            <WhackList thisRoom={thisRoom} />
          </>
        ) : (
          <div className="text-left">
            <p>
              Focus your attention to your screen. Hide the contents of your
              screen. Tap your phone occasionally. Pretend to scroll
              occasionally.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
