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
      <p>{narration}</p>
      {console.log("thisRoom", thisRoom)}
      <p>
        You are a{" "}
        {Role[thisRoom && thisRoom.state.players[thisRoom.sessionId]?.role]}
      </p>
    </>
  );
}
