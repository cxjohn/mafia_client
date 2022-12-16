import { RoomProps } from "../types";

export default function WhackList({ thisRoom }: RoomProps) {
  const handleWhack = (client: string, target: string) => {
    //TODO: room type
    // @ts-ignore
    thisRoom?.send("voteForWhack", (client, target));
  };
  return (
    <ul className="my-8">
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            if (session.role !== 0 && session.alive) {
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleWhack(
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
            } else {
              return null;
            }
          }
        )}
    </ul>
  );
}
