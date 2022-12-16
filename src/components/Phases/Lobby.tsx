import PlayerList from "../PlayerList";
import TitleText from "../TitleText";
import { RoomProps } from "../../types";

export default function PlayerRoom({ thisRoom }: RoomProps) {
  return (
    <>
      <TitleText text="Playas Room" />
      <div className="pt-8">
        <PlayerList thisRoom={thisRoom} />
      </div>
    </>
  );
}
