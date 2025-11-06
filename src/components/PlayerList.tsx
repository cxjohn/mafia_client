import { RoomProps } from "../types";

export default function PlayerList({ thisRoom }: RoomProps) {
  return (
    <ol className="text-terminalFg font-mono">
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            return (
              <li
                className={`text-xl text-left list-decimal list-inside ${
                  Object.keys(Object.fromEntries(thisRoom.state.players))[
                    idx
                  ] === thisRoom.sessionId
                    ? "text-terminalAccent"
                    : "text-terminalFg"
                } ${session.alive ? "" : "line-through text-terminalFgDim"}`}
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
