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
                    className={`text-xl p-4 border border-primaryText w-full ${
                      !clicked ? "hover:bg-secondaryBg" : ""
                    } ${
                      selected ===
                      Object.keys(Object.fromEntries(thisRoom.state.players))[
                        idx
                      ]
                        ? "bg-secondaryBg"
                        : ""
                    } `}
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
      <div className="my-8">
        {selected && thisRoom.state.players.get(selected)?.name}
        {selected
          ? thisRoom.state.players.get(selected)?.role === 0
            ? " is Mafia"
            : " is not Mafia"
          : ""}
      </div>
      <button
        onClick={() => handleFinished(selected)}
        className="border-2 border-primaryText rounded p-2 cursor-pointer hover:bg-secondaryBg"
      >
        Finish detecting
      </button>
    </ul>
  );
}
