export default function Conclusion() {
  return (
    <>
      <div className="win-lose">
        <h1 className="win good-colour">You win!</h1>
        <h1 className="lose bad-colour">You lose!</h1>
      </div>
      <div className="death">
        <p>The people with the most votes were executed.</p>
      </div>

      <div className="event-log">
        <h2>Event log</h2>
      </div>
      <div>
        <a className="restart only-host btn btn-primary">Restart Game</a>
        <a className="play-again not-host btn btn-primary">Play Again</a>
        <a className="leave btn btn-danger">Leave Game</a>
      </div>
    </>
  );
}
