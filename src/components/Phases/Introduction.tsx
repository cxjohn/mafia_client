import TitleText from "../TitleText";
import { RoomType } from "../../types";

enum Role {
  "Mafia",
  "Townsperson",
}

type IntroProps = {
  narration: string;
  thisRoom: RoomType;
};

export default function Introduction({ narration, thisRoom }: IntroProps) {
  return (
    <>
      <TitleText text="Mafia!" />
      <p className="text-left py-12">{narration}</p>
      <p className="text-secondaryText mt-12">
        You are a {/* @ts-ignore */}
        {Role[thisRoom && thisRoom.state.players[thisRoom.sessionId]?.role]}
      </p>
    </>
  );
}
