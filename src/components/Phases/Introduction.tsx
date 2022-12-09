import TitleText from "../TitleText";

type IntroProps = {
  narration: string;
  thisRoom: any;
  sessionIDs: string[];
};

export default function Introduction({
  narration,
  thisRoom,
  sessionIDs,
}: IntroProps) {
  return (
    <>
      <TitleText text="Mafia!" />
      <p>{narration}</p>
      {console.log("thisRoom", thisRoom)}
      <p>
        role: {thisRoom && thisRoom.state.players[thisRoom.sessionId]?.role}
      </p>
    </>
  );
}
