import { RoomProps } from "../types";

export default function PlayerList({ thisRoom }: RoomProps) {
  return (
    <ol>
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            return (
              <li
                className={`text-xl text-left list-decimal list-inside ${
                  Object.keys(Object.fromEntries(thisRoom.state.players))[
                    idx
                  ] === thisRoom.sessionId
                    ? "text-sky-700"
                    : "text-white"
                } ${session.alive ? "" : "line-through"}`}
                key={idx}
              >
                {session.name}
              </li>
            );
          }
        )}
    </ol>
  );
}
