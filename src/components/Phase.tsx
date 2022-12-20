import Conclusion from "./Phases/Conclusion";
import Introduction from "./Phases/Introduction";
import NarrationMorning from "./Phases/NarrationMorning";
import Night from "./Phases/Night";
import PlayerRoom from "./Phases/Lobby";
import Voting from "./Phases/Voting";
import { RoomType, TimeType } from "../types";

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
  thisRoom: RoomType;
  time?: TimeType;
  narration: string;
  setThisRoom: any;
};

export default function Phase({
  phase,
  thisRoom,
  time,
  narration,
  setThisRoom,
}: PhaseProps) {
  switch (phase) {
    case PhaseType.LOBBY:
      return <PlayerRoom thisRoom={thisRoom} />;
    case PhaseType.INTRODUCTION:
      return <Introduction narration={narration} thisRoom={thisRoom} />;
    case PhaseType.NIGHT:
      return <Night thisRoom={thisRoom} />;
    case PhaseType.NARRATIONMORNING:
      return <NarrationMorning time={time} />;
    case PhaseType.VOTING:
      return <Voting thisRoom={thisRoom} />;
    case PhaseType.NARRATIONLYNCHING:
      return <div>Narration Lynching</div>;
    case PhaseType.CONCLUSION:
      return <Conclusion thisRoom={thisRoom} setThisRoom={setThisRoom} />;
    default:
      return <div>phase error</div>;
  }
}
