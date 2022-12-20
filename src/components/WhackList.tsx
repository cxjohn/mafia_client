import { RoomProps } from "../types";

export default function WhackList({ thisRoom }: RoomProps) {
  const handleWhack = (target: string) => {
    thisRoom?.send("voteForWhack", target);
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
                        Object.keys(Object.fromEntries(thisRoom.state.players))[
                          idx
                        ]
                      )
                    }
                    className="text-xl p-4 border border-primaryText w-full hover:bg-secondaryBg"
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
