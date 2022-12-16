import { useState, useEffect } from "react";

type ConclusionProps = {
  //TODO: room type
  thisRoom: any;
};

export default function Conclusion({ thisRoom }: ConclusionProps) {
  const [mafiaWin, setMafiaWin] = useState(false);

  useEffect(() => {
    thisRoom &&
      thisRoom.state.players["$items"].forEach((player: any) => {
        if (player.role === 0 && player.alive) {
          setMafiaWin(true);
        }
      });
  }, [thisRoom]);

  return <div>{mafiaWin ? "Mafia" : "Townspeople"} win!</div>;
}
