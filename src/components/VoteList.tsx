type VoteListProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
  handleVote: (client: string, target: string) => void;
};

export default function VoteList({
  thisRoom,
  sessionIDs,
  handleVote,
}: VoteListProps) {
  const vote = (client: string, target: string) => {
    handleVote(client, target);
  };
  return (
    <ul className="my-8">
      {thisRoom &&
        sessionIDs
          .filter((sessionID) => sessionID !== thisRoom.sessionId)
          .map((session, idx) => {
            if (thisRoom.state.players[session]?.alive) {
              return (
                <li key={idx}>
                  <button
                    onClick={() => vote(thisRoom.sessionId, session)}
                    className="text-xl p-4 border border-white w-full hover:bg-gray-800"
                  >
                    {thisRoom.state.players[session]?.name}
                  </button>
                </li>
              );
            } else {
              return null;
            }
          })}
    </ul>
  );
}
