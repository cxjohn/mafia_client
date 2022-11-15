export default function Voting() {
  return (
    <section id="vote">
      <h1>No more talking!</h1>
      <div className="not-spectator">
        <p>Place a vote to kill someone now</p>
        <a className="template player list-group-item">
          <div className="left">
            <div className="card w50 has-revealer">
              <header></header>
              <div className="image"></div>
              <footer>
                <div className="description"></div>
                <div className="team"></div>
              </footer>
            </div>
          </div>
          <div className="centre player-name"></div>
          <div className="right"></div>
        </a>
        <div className="players list-group complex-list enabled">
          <a
            className="player list-group-item"
            data-id="195f567e-dbfa-407a-9f35-f6d9e612a9f1"
          >
            <div className="left">
              <div className="card w50 has-revealer unknown">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">chris</div>
            <div className="right"></div>
          </a>
          <a
            className="player list-group-item disabled"
            data-id="bf3480ea-514f-48ca-ad3f-429880494f0b"
          >
            <div className="left">
              <div className="card w50 has-revealer unknown">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">chris</div>
            <div className="right"></div>
          </a>
          <a
            className="player list-group-item"
            data-id="4c9fc1b4-15e5-43dc-b31f-3cb78827d5bb"
          >
            <div className="left">
              <div className="card w50 has-revealer unknown">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">jim</div>
            <div className="right"></div>
          </a>
          <a
            className="player list-group-item"
            data-id="e82a1dc8-3f5a-49be-a43e-7413921924fd"
          >
            <div className="left">
              <div className="card w50 has-revealer unknown">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">Mike</div>
            <div className="right"></div>
          </a>
        </div>
        <p>
          You <strong>must</strong> vote for someone other than yourself.
        </p>
        <p>
          To kill nobody, everyone must receive a <strong>single vote</strong>
          .One way to do this is for everyoneto vote for the person after them.
        </p>
      </div>
      <div className="only-spectator">
        <p>Players are voting to kill someone now</p>
      </div>
      <div className="base not-spectator">
        <div className="utility-menu-button"></div>
        <div className="info-menu-button"></div>
        <p className="shame-text">Waiting for you and 3 others</p>
      </div>
    </section>
  );
}
