import TitleText from "../TitleText";
import VoteList from "../VoteList";

type VotingProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
};

export default function Voting({ thisRoom, sessionIDs }: VotingProps) {
  return (
    <>
      <TitleText text="No more talking!" />
      <div>
        <p>Place a vote to kill someone now</p>
        <VoteList thisRoom={thisRoom} sessionIDs={sessionIDs} />

        <p>
          To kill nobody, everyone must receive a <strong>single vote</strong>
          .One way to do this is for everyoneto vote for the person after them.
        </p>
      </div>
    </>
  );
}
