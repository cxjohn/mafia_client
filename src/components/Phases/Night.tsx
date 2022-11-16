import TitleText from "../TitleText";

export default function Night() {
  return (
    <>
      <TitleText text="Night has fallen..." />

      <p className="text-6xl py-8">🌕</p>
      <hr />

      <div className="py-8">
        <p>Focus your attention to your screen.</p>
        <p>Hide the contents of your screen.</p>
        <p>Tap your phone occasionally.</p>
        <p>Pretend to scroll occasionally.</p>
      </div>
    </>
  );
}
