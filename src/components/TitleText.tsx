type TitleTextProps = {
  text: string;
  classes?: string;
};

export default function TitleText({ text, classes }: TitleTextProps) {
  return (
    <h1 className={`text-6xl font-semibold ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
}
