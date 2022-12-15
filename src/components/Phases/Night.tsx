import WhackList from "../WhackList";
import TitleText from "../TitleText";

type NightProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function Night({ thisRoom, sessionIDs }: NightProps) {
  return (
    <>
      <TitleText text="Night has fallen..." />

      <p className="text-6xl py-8">🌕</p>
      <hr />

      <div className="py-8">
        {thisRoom.state.players[thisRoom.sessionId]?.role === 0 ? (
          <WhackList thisRoom={thisRoom} sessionIDs={sessionIDs} />
        ) : (
          <>
            <p>Focus your attention to your screen.</p>
            <p>Hide the contents of your screen.</p>
            <p>Tap your phone occasionally.</p>
            <p>Pretend to scroll occasionally.</p>
          </>
        )}
      </div>
    </>
  );
}
