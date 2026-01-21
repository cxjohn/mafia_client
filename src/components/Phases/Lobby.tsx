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
            
        <div className="fixed top-4 right-4 bg-black border border-terminalAccent px-4 py-2 font-mono text-terminalFg text-sm">
          <div className="text-terminalAccent mb-1">Room Code:</div>
          <div className="text-lg font-bold">{game.roomId}</div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(game.roomId);
            }}
            className="mt-2 text-xs text-terminalAccent hover:underline"
          >
            Copy
          </button>
        </div>
      
    </>
  );
}