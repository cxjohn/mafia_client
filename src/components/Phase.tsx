import PlayerList from "./PlayerList";

export type PhaseType =
  | "LOBBY"
  | "INTRODUCTION"
  | "NIGHT"
  | "NARRATIONMORNING"
  | "VOTING"
  | "NARRATIONLYNCHING"
  | "CONCLUSION";

type PhaseProps = {
  phase: PhaseType;
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function Phase({ phase, thisRoom, sessionIDs }: PhaseProps) {
  switch (phase) {
    case "LOBBY":
      return <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />;
    case "INTRODUCTION":
      return <div>1</div>;
    case "NIGHT":
      return <div>2</div>;
    case "NARRATIONMORNING":
      return <div>3</div>;
    case "VOTING":
      return <div>4</div>;
    case "NARRATIONLYNCHING":
      return <div>5</div>;
    case "CONCLUSION":
      return <div>6</div>;
    default:
      return <div>phase error</div>;
  }
}
