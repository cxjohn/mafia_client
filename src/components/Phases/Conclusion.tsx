import { useState, useEffect } from "react";
import { RoomProps } from "../../types";

export default function Conclusion({ thisRoom }: RoomProps) {
  const [mafiaWin, setMafiaWin] = useState(false);

  useEffect(() => {
    thisRoom &&
      thisRoom.state.players["$items"].forEach((player: any) => {
        if (player.role === 0 && player.alive) {
          setMafiaWin(true);
        }
      });
  }, [thisRoom]);

  const handleDispose = () => {
    // @ts-ignore
    thisRoom?.send("kill");
  };

  return (
    <div className="flex flex-col justify-between h-[75vh]">
      <div>{mafiaWin ? "Mafia" : "Townspeople"} win!</div>
      <button
        onClick={handleDispose}
        className="border-2 border-white rounded p-2 cursor-pointer "
      >
        Dispose Room
      </button>
    </div>
  );
}
