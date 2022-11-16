export default function Time({ time }: any) {
  return (
    <span className="text-[200px] leading-[200px] font-normal py-8">
      {time ? new Date(time * 1000).toISOString().substr(15, 4) : "4:00"}
    </span>
  );
}
