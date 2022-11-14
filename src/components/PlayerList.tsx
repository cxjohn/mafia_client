type PlayerListProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function PlayerList({ thisRoom, sessionIDs }: PlayerListProps) {
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
      <ol className="pt-8">
        {thisRoom &&
          sessionIDs.map((session, idx) => {
            return (
              <li
                className="text-xl text-left list-decimal list-inside"
                key={idx}
              >
                {thisRoom.state.players[session]?.name}
              </li>
            );
          })}
      </ol>
    </div>
  );
}
