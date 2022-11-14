import PlayerList from "./PlayerList";

type PlayerRoomProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function PlayerRoom({ thisRoom, sessionIDs }: PlayerRoomProps) {
  return (
    <div>
      <h3 className="text-4xl text__shadow">Playas Room</h3>
      {/* {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            return (
              <li className="text-left list-decimal list-inside" key={idx}>
                {session.name}
              </li>
            );
          }
        )} */}
      <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />
    </div>
  );
}
