import { useState } from "react";

type VoteListProps = {
  //TODO: room type
  thisRoom: any;
};

export default function VoteList({ thisRoom }: VoteListProps) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const handleVote = (client: string, target: string) => {
    setClicked(true);
    setSelected(target);
    console.log("target", target);
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
            ) {
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
                    className={`text-xl p-4 border border-white w-full ${
                      !clicked ? "hover:bg-gray-800" : ""
                    } ${
                      selected ===
                      Object.keys(Object.fromEntries(thisRoom.state.players))[
                        idx
                      ]
                        ? "bg-gray-800"
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
