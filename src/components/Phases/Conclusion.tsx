import { useState, useEffect } from "react";
import { RoomProps } from "../../types";

interface ConclusionProps extends RoomProps {
  setThisRoom: any;
}

export default function Conclusion({ thisRoom, setThisRoom }: ConclusionProps) {
  const [mafiaWin, setMafiaWin] = useState(false);

  useEffect(() => {
    thisRoom &&
      thisRoom.state.players["$items"].forEach((player: any) => {
        if (player.role === 0 && player.alive) {
          setMafiaWin(true);
        }
      });
  }, [thisRoom]);

  const handleLeave = () => {
    thisRoom?.send("kill");
    thisRoom && localStorage.removeItem("roomId");
    thisRoom && localStorage.removeItem("sessionId");
    setThisRoom();
  };

  return (
    <div className="flex flex-col justify-between h-[75vh]">
      <div>{mafiaWin ? "Mafia" : "Townspeople"} win!</div>
      <button
        onClick={handleLeave}
        className="border-2 border-primaryText rounded p-2 cursor-pointer "
      >
        Leave
      </button>
    </div>
  );
}
