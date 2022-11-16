import TitleText from "../TitleText";

type IntroProps = {
  narration: string;
};

export default function Introduction({ narration }: IntroProps) {
  return (
    <>
      <TitleText text="Mafia!" />
      <p>{narration}</p>
    </>
  );
}
