import TitleText from "../TitleText";
import VoteList from "../VoteList";
import { RoomProps } from "../../types";

export default function Voting({ thisRoom }: RoomProps) {
  return (
    <>
      <TitleText text="No more talking!" />
      <div className="text-terminalFg font-mono">
        <p>Place a vote to kill someone now</p>
        <VoteList thisRoom={thisRoom} />
      </div>
    </>
  );
}
