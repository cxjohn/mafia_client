import PlayerList from "./PlayerList";

type PhaseProps = {
  phase: number;
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function Phase({ phase, thisRoom, sessionIDs }: PhaseProps) {
  switch (phase) {
    case 0:
      return <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />;
    case 1:
      return <div>1</div>;
    case 2:
      return <div>2</div>;
    case 3:
      return <div>3</div>;
    default:
      return <div>error</div>;
  }
}
