import Conclusion from "./Phases/Conclusion";
import Introduction from "./Phases/Introduction";
import NarrationMorning from "./Phases/NarrationMorning";
import Night from "./Phases/Night";
import PlayerRoom from "./Phases/Lobby";
import Voting from "./Phases/Voting";

export enum PhaseType {
  LOBBY,
  INTRODUCTION,
  NIGHT,
  NARRATIONMORNING,
  VOTING,
  NARRATIONLYNCHING,
  CONCLUSION,
}

type PhaseProps = {
  phase: PhaseType;
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
  time?: number;
  narration: string;
};

export default function Phase({
  phase,
  thisRoom,
  sessionIDs,
  time,
  narration,
}: PhaseProps) {
  switch (phase) {
    case PhaseType.LOBBY:
      return <PlayerRoom thisRoom={thisRoom} sessionIDs={sessionIDs} />;
    case PhaseType.INTRODUCTION:
      return <Introduction narration={narration} />;
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
