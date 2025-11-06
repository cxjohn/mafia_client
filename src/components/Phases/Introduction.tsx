import TitleText from "../TitleText";
import { RoomType } from "../../types";

enum Role {
  "Mafia",
  "Townsperson",
  "Angel",
  "Detective",
}

type IntroProps = {
  narration: string;
  thisRoom: RoomType;
};

export default function Introduction({ narration, thisRoom }: IntroProps) {
  return (
    <>
      <TitleText text="Mafia!" />
      <p className="text-left py-12 text-terminalFg font-mono">{narration}</p>
      <p className="text-terminalAccent mt-12 font-mono">
        You are a {/* @ts-ignore */}
        {Role[thisRoom && thisRoom.state.players[thisRoom.sessionId]?.role]}
      </p>
    </>
  );
}
