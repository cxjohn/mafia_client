type PlayerListProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function PlayerList({ thisRoom, sessionIDs }: PlayerListProps) {
  //  thisRoom &&
  //    Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
  //      (session, idx) => {
  //        return (
  //          <li className="text-left list-decimal list-inside" key={idx}>
  //            {session.name}
  //          </li>
  //        );
  //      }
  //    );

  return (
    <ol>
      {thisRoom &&
        sessionIDs.map((session, idx) => {
          return (
            <li
              className={`text-xl text-left list-decimal list-inside ${
                thisRoom.sessionId === session ? "text-sky-700" : "text-white"
              } ${
                thisRoom.state.players[session]?.alive ? "" : "line-through"
              }`}
              key={idx}
            >
              {thisRoom.state.players[session]?.name}
            </li>
          );
        })}
    </ol>
  );
}
