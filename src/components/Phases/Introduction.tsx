import TitleText from "../TitleText";

enum Role {
  "Mafia",
  "Townsperson",
}

type IntroProps = {
  narration: string;
  thisRoom: any;
};

export default function Introduction({ narration, thisRoom }: IntroProps) {
  return (
    <>
      <TitleText text="Mafia!" />
      <p className="text-left py-12">{narration}</p>
      <p className="text-sky-700 mt-12">
        You are a{" "}
        {Role[thisRoom && thisRoom.state.players[thisRoom.sessionId]?.role]}
      </p>
    </>
  );
}
