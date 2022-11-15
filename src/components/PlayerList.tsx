type PlayerListProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function PlayerList({ thisRoom, sessionIDs }: PlayerListProps) {
  return (
    <ol className="pt-8">
      {thisRoom &&
        sessionIDs.map((session, idx) => {
          return (
            <li
              className={`text-xl text-left list-decimal list-inside ${
                thisRoom.sessionId === session ? "text-sky-700" : "text-white"
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
