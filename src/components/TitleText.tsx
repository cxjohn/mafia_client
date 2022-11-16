type TitleTextProps = {
  text: string;
  classes?: string;
};

export default function TitleText({ text, classes }: TitleTextProps) {
  return (
    <h1
      className={`text-6xl text-white font-semibold text__shadow ${
        classes ? classes : ""
      }`}
    >
      {text}
    </h1>
  );
}
