import Time from "../Time";
import TitleText from "../TitleText";

export default function NarrationMorning({ time }: any) {
  return (
    <>
      <TitleText text="Day has risen..." />
      <p className="text-6xl py-8">☀️</p>
      <hr />
      <Time time={time} />
      <hr />
      <div className="py-8">
        <p>Discuss what happened in the night</p>
        <p>
          When the time is up, you must vote to kill someone{" "}
          <strong className="werewolf-team">immediately</strong>
        </p>
      </div>
    </>
  );
}
