import PlayerList from "../PlayerList";
import TitleText from "../TitleText";

type PlayerRoomProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function PlayerRoom({ thisRoom, sessionIDs }: PlayerRoomProps) {
  return (
    <>
      <TitleText text="Playas Room" />
      <div className="pt-8">
        <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />
      </div>
    </>
  );
}
