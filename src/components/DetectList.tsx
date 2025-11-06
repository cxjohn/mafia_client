import { useState } from "react";
import { RoomProps } from "../types";

export default function DetectList({ thisRoom }: RoomProps) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelected = (target: string) => {
    setClicked(true);
    setSelected(target);
  };
  const handleFinished = (target: string) => {
    thisRoom?.send("detectiveFinished", target);
  };
  return (
    <ul className="my-8">
      {thisRoom &&
        Object.values(Object.fromEntries(thisRoom.state.players["$items"])).map(
          (session, idx) => {
            if (session.role !== 3 && session.alive) {
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleSelected(
                        Object.keys(Object.fromEntries(thisRoom.state.players))[
                          idx
                        ]
                      )
                    }
                    className={`text-xl p-4 border border-terminalAccent text-terminalFg font-mono w-full ${
                      !clicked ? "hover:bg-terminalAccent hover:text-black" : ""
                    } ${
                      selected ===
                      Object.keys(Object.fromEntries(thisRoom.state.players))[
                        idx
                      ]
                        ? "bg-terminalAccent text-black"
                        : ""
                    } transition-all duration-150`}
                    disabled={clicked}
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
      <div className="my-8 text-terminalFg font-mono">
        {selected && thisRoom.state.players.get(selected)?.name}
        {selected
          ? thisRoom.state.players.get(selected)?.role === 0
            ? " is Mafia"
            : " is not Mafia"
          : ""}
      </div>
      <button
        onClick={() => handleFinished(selected)}
        className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer"
      >
        Finish detecting
      </button>
    </ul>
  );
}
