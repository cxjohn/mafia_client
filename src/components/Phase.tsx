import Conclusion from "./Conclusion";
import Introduction from "./Introduction";
import NarrationMorning from "./NarrationMorning";
import Night from "./Night";
import PlayerRoom from "./PlayerRoom";
import Voting from "./Voting";

export enum PhaseType {
  LOBBY = "LOBBY",
  INTRODUCTION = "INTRODUCTION",
  NIGHT = "NIGHT",
  NARRATIONMORNING = "NARRATIONMORNING",
  VOTING = "VOTING",
  NARRATIONLYNCHING = "NARRATIONLYNCHING",
  CONCLUSION = "CONCLUSION",
}

type PhaseProps = {
  phase: PhaseType;
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
  time: number;
};

export default function Phase({
  phase,
  thisRoom,
  sessionIDs,
  time,
}: PhaseProps) {
  switch (phase) {
    case PhaseType.LOBBY:
      return <PlayerRoom thisRoom={thisRoom} sessionIDs={sessionIDs} />;
    case PhaseType.INTRODUCTION:
      return <Introduction />;
    case PhaseType.NIGHT:
      return <Night />;
    case PhaseType.NARRATIONMORNING:
      return <NarrationMorning time={time} />;
    case PhaseType.VOTING:
      return <Voting />;
    case PhaseType.NARRATIONLYNCHING:
      return <div>Narration Lynching</div>;
    case PhaseType.CONCLUSION:
      return <Conclusion />;
    default:
      return <div>phase error</div>;
  }
}
