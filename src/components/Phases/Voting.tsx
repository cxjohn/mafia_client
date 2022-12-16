import TitleText from "../TitleText";
import VoteList from "../VoteList";

type VotingProps = {
  //TODO: room type
  thisRoom: any;
};

export default function Voting({ thisRoom }: VotingProps) {
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
