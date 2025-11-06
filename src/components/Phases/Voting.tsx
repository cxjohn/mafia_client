import TitleText from "../TitleText";
import VoteList from "../VoteList";

export default function Voting() {
  return (
    <>
      <TitleText text="No more talking!" />
      <div className="text-terminalFg font-mono">
        <p>Place a vote to kill someone now</p>
        <VoteList />
      </div>
    </>
  );
}
