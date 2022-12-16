import PlayerList from "../PlayerList";
import TitleText from "../TitleText";

type PlayerRoomProps = {
  //TODO: room type
  thisRoom: any;
};

export default function PlayerRoom({ thisRoom }: PlayerRoomProps) {
  return (
    <>
      <TitleText text="Playas Room" />
      <div className="pt-8">
        <PlayerList thisRoom={thisRoom} />
      </div>
    </>
  );
}
