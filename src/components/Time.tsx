export default function Time({ time }: any) {
  return <div>{time && new Date(time * 1000).toISOString().substr(15, 4)}</div>;
}
