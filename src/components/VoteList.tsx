import { useState } from "react";
import { RoomProps } from "../types";

export default function VoteList({ thisRoom }: RoomProps) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const handleVote = (target: string) => {
    setClicked(true);
    setSelected(target);
    thisRoom.send("voteForLynch", target);
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
            ) {
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleVote(
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
    </ul>
  );
}
