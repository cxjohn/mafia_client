import { useGame } from "../../GameContext";
import PlayerList from "../PlayerList";
import TitleText from "../TitleText";
import { RolesType } from "../../types";
import SelectRole from "../SelectRole";

type LobbyProps = {
  rolesArray: RolesType[];
  setRolesArray: React.Dispatch<React.SetStateAction<RolesType[]>>;
};

export default function Lobby({ rolesArray, setRolesArray }: LobbyProps) {
  const game = useGame();
  const currentPlayer = game.players.get(game.sessionId);
  return (
    <>
      <TitleText text="Playas Room" />
      <div className="pt-8 flex flex-col justify-between h-[60vh]">
        <PlayerList />
        {currentPlayer?.room_owner && (
          <SelectRole rolesArray={rolesArray} setRolesArray={setRolesArray} />
        )}
      </div>
    </>
  );
}