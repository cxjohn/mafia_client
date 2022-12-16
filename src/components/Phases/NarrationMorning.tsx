import Time from "../Time";
import TitleText from "../TitleText";

export default function NarrationMorning({ time }: any) {
  return (
    <>
      <TitleText text="Morning" />
      <p className="text-6xl py-8">☀️</p>
      <hr />
      <Time time={time} />
      <hr />
      <div className="py-8 text-left">
        <p>
          Discuss what happened in the night. When the time is up, you must vote
          to kill someone immediately.
        </p>
      </div>
    </>
  );
}
