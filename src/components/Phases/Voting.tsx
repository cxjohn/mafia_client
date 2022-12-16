import TitleText from "../TitleText";
import VoteList from "../VoteList";
import { RoomProps } from "../../types";

export default function Voting({ thisRoom }: RoomProps) {
  return (
    <>
      <TitleText text="No more talking!" />
      <div>
        <p>Place a vote to kill someone now</p>
        <VoteList thisRoom={thisRoom} />
      </div>
    </>
  );
}
