import TitleText from "../TitleText";

export default function Voting() {
  return (
    <>
      <TitleText text="No more talking!" />
      <div>
        <p>Place a vote to kill someone now</p>

        <p>
          You <strong>must</strong> vote for someone other than yourself.
        </p>
        <p>
          To kill nobody, everyone must receive a <strong>single vote</strong>
          .One way to do this is for everyoneto vote for the person after them.
        </p>
      </div>
    </>
  );
}
