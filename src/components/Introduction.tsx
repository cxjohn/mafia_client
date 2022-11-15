type IntroProps = {
  narration: string;

};

export default function Introduction({narration }: IntroProps) {
  return (
    <section>
      <h1>Mafia!</h1>
      <p>
        {narration}
      </p>
    </section>
  );
}
