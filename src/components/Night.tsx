export default function Night() {
  return (
    <div>
      <h1 className="text-4xl text-white font-semibold">Night has fallen...</h1>
      <p className="text-6xl">🌕</p>
      <div className="not-spectator">
        <p>Focus your attention to your screen.</p>
        <p>Hide the contents of your screen.</p>
        <p>Tap your phone occasionally.</p>
        <p>Pretend to scroll occasionally.</p>
      </div>
      <div className="only-spectator">
        <p>Players are performing their night actions.</p>
      </div>
    </div>
  );
}
