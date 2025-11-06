import Time from "../Time";
import TitleText from "../TitleText";
import { TimeProps } from "../../types";

export default function NarrationMorning({ time }: TimeProps) {
  return (
    <>
      <TitleText text="Morning" />
      <p className="text-6xl py-8">☀️</p>
      <hr className="border-terminalAccent" />
      <Time time={time} />
      <hr className="border-terminalAccent" />
      <div className="py-8 text-left text-terminalFg font-mono">
        <p>
          Discuss what happened in the night. When the time is up, you must vote
          to kill someone immediately.
        </p>
      </div>
    </>
  );
}
