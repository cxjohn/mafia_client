import TitleText from "../TitleText";
import VoteList from "../VoteList";

type VotingProps = {
  //TODO: room type
  thisRoom: any;
  sessionIDs: string[];
  handleVote: (client: string, target: string) => void;
};

export default function Voting({
  thisRoom,
  sessionIDs,
  handleVote,
}: VotingProps) {
  return (
    <>
      <TitleText text="No more talking!" />
      <div>
        <p>Place a vote to kill someone now</p>
        <VoteList
          thisRoom={thisRoom}
          sessionIDs={sessionIDs}
          handleVote={handleVote}
        />

        <p>
          To kill nobody, everyone must receive a <strong>single vote</strong>
          .One way to do this is for everyoneto vote for the person after them.
        </p>
      </div>
    </>
  );
}
