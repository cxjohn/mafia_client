import PlayerList from "../PlayerList";
import TitleText from "../TitleText";
import { RoomProps, RolesType } from "../../types";
import SelectRole from "../SelectRole";

interface LobbyProps extends RoomProps {
  rolesArray: RolesType[];
  setRolesArray: React.Dispatch<React.SetStateAction<RolesType[]>>;
}

export default function Lobby({
  thisRoom,
  rolesArray,
  setRolesArray,
}: LobbyProps) {
  return (
    <>
      <TitleText text="Playas Room" />
      <div className="pt-8 flex flex-col justify-between h-[60vh]">
        <PlayerList thisRoom={thisRoom} />
        {thisRoom &&
        thisRoom.state.players.get(thisRoom.sessionId)?.room_owner ? (
          <SelectRole
            thisRoom={thisRoom}
            rolesArray={rolesArray}
            setRolesArray={setRolesArray}
          />
        ) : null}
      </div>
    </>
  );
}
