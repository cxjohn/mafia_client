import Night from "./Night";
import PlayerList from "./PlayerList";

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
};

export default function Phase({ phase, thisRoom, sessionIDs }: PhaseProps) {
  switch (phase) {
    case PhaseType.LOBBY:
      return <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />;
    case PhaseType.INTRODUCTION:
      return <div>1</div>;
    case PhaseType.NIGHT:
      return <Night />;
    case PhaseType.NARRATIONMORNING:
      return <div>3</div>;
    case PhaseType.VOTING:
      return <div>4</div>;
    case PhaseType.NARRATIONLYNCHING:
      return <div>5</div>;
    case PhaseType.CONCLUSION:
      return <div>6</div>;
    default:
      return <div>phase error</div>;
  }
}
