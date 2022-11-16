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
      <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />
    </>
  );
}
