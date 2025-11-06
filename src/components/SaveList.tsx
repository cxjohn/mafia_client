import { RoomProps } from "../types";

export default function SaveList({ thisRoom }: RoomProps) {
  const handleSave = (target: string) => {
    thisRoom?.send("selectSaved", target);
  };
  return (
    <ul className="my-8">
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            if (session.role !== 2 && session.alive) {
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleSave(
                        Object.keys(Object.fromEntries(thisRoom.state.players))[
                          idx
                        ]
                      )
                    }
                    className="text-xl p-4 border border-terminalAccent text-terminalFg font-mono w-full hover:bg-terminalAccent hover:text-black transition-all duration-150"
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
