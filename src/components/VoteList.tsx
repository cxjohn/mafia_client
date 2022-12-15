type VoteListProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function VoteList({ thisRoom, sessionIDs }: VoteListProps) {
  const handleVote = (client: string, target: string) => {
    //TODO: room type
    // @ts-ignore
    thisRoom?.send("voteForLynch", (client, target));
  };
  return (
    <ul className="my-8">
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            if (
              Object.keys(Object.fromEntries(thisRoom.state.players))[idx] !==
                thisRoom.sessionId &&
              session.alive
            )
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleVote(
                        thisRoom.sessionId,
                        Object.keys(Object.fromEntries(thisRoom.state.players))[
                          idx
                        ]
                      )
                    }
                    className="text-xl p-4 border border-white w-full hover:bg-gray-800"
                  >
                    {session.name}
                  </button>
                </li>
              );
          }
        )}
    </ul>
  );
}
