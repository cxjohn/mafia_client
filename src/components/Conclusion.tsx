export default function Conclusion() {
  return (
    <section id="outcome">
      <div className="win-lose">
        <h1 className="win good-colour">You win!</h1>
        <h1 className="lose bad-colour">You lose!</h1>
      </div>
      <div className="death">
        <p>
          The people with the most votes were executed
          <span className="has-single-hunted">
            , and the Hunter killed <strong className="hunted"></strong>
          </span>
          <span className="has-many-hunted">
            , and the Hunters chain-killed <strong className="hunted"></strong>
          </span>
          .
        </p>
      </div>
      <div className="no-death-village">
        <p>The village voted that nobody should die.</p>
      </div>
      <div className="no-death-protected">
        <p>
          Nobody died because of the <span className="protecting-roles"></span>.
        </p>
      </div>
      <div className="vote-tally">
        <div className="template player list-group-item">
          <div className="left">
            <div className="card w50">
              <header></header>
              <div className="image"></div>
              <footer>
                <div className="description"></div>
                <div className="team"></div>
              </footer>
            </div>
          </div>
          <div className="centre player-name"></div>
          <div className="right">
            <span className="label"></span>
          </div>
        </div>
        <div className="players list-group complex-list">
          <div className="player list-group-item">
            <div className="left">
              <div className="card w50 Villager">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">Mike</div>
            <div className="right">
              <span className="label label-danger">2</span>
            </div>
          </div>
          <div className="player list-group-item">
            <div className="left">
              <div className="card w50 Robber">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">chris</div>
            <div className="right">
              <span className="label label-default">1</span>
            </div>
          </div>
          <div className="player list-group-item">
            <div className="left">
              <div className="card w50 Werewolf">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <div className="centre player-name">jim</div>
            <div className="right">
              <span className="label label-default">1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="your-final-identity">
        <p>Your final identity is</p>
        <div className="card-with-mini">
          <div className="card w225 role Robber">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <div className="card w125 mini-role">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
        </div>
      </div>
      <li className="template player-card">
        <div className="card-with-mini">
          <div className="card w125 role">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <div className="card w50 mini-role">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
        </div>
        <p className="player-name"></p>
      </li>
      <div className="has-werewolf-team">
        <div className="werewolves-win">
          <h2 className="good-colour">The Werewolf team won</h2>
          <p>
            because
            <span className="no-werewolf-dead">no Werewolves were killed</span>
            <span className="lone-werewolf-ally">someone was killed</span>.
          </p>
          <ul className="card-list werewolves">
            <li className="player-card">
              <div className="card-with-mini">
                <div className="card w125 role Werewolf">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="card w50 mini-role">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
              </div>
              <p className="player-name">jim</p>
            </li>
          </ul>
          <div className="has-werewolf-losers">
            <p>
              But <span className="bad-colour">some lost</span> because they
              died.
            </p>
            <ul className="card-list werewolf-losers"></ul>
          </div>
        </div>
        <div className="werewolves-lose">
          <h2 className="bad-colour">The Werewolf team lost</h2>
          <p>
            because
            <span className="tanners-win">
              a <span className="tanner-team">Tanner</span> died
            </span>
            <span className="tanners-lose">
              <span className="werewolf-dead">
                a <span className="werewolf-team">Werewolf</span> died
              </span>
              <span className="lone-werewolf-ally">
                they failed to kill anyone
              </span>
            </span>
            .
          </p>
          <ul className="card-list werewolf-losers"></ul>
        </div>
      </div>
      <div className="has-villager-team">
        <div className="villagers-win">
          <h2 className="good-colour">The Villager team won</h2>
          <p>
            because
            <span className="werewolf-dead">a Werewolf was killed</span>
            <span className="no-werewolves">
              there were no Werewolves and nobody died
            </span>
            .
          </p>
        </div>
        <div className="villagers-lose">
          <h2 className="bad-colour">The Villager team lost</h2>
          <p>
            because
            <span className="no-werewolf-dead">
              they failed to kill a Werewolf
            </span>
            <span className="dead-villager">
              there were no Werewolves and someone was killed
            </span>
            .
          </p>
        </div>
        <ul className="card-list villagers">
          <li className="player-card">
            <div className="card-with-mini">
              <div className="card w125 role Copycat">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 mini-role Seer">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <p className="player-name">chris</p>
          </li>
          <li className="player-card">
            <div className="card-with-mini">
              <div className="card w125 role Robber">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 mini-role">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <p className="player-name">chris</p>
          </li>
          <li className="player-card">
            <div className="card-with-mini">
              <div className="card w125 role Villager">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 mini-role">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
            <p className="player-name bad-colour">Mike</p>
          </li>
        </ul>
      </div>
      <div className="has-tanner-team">
        <div className="tanners-win">
          <h2 className="good-colour">The Tanner team won</h2>
          <p>because a Tanner died.</p>
          <ul className="card-list tanners"></ul>
          <div className="has-tanner-losers">
            <p>
              But <span className="bad-colour">some lost</span> because they're
              still alive.
            </p>
            <ul className="card-list tanner-losers"></ul>
          </div>
        </div>
        <div className="tanners-lose">
          <h2 className="bad-colour">The Tanner team lost</h2>
          <p>because no Tanner died.</p>
          <ul className="card-list tanner-losers"></ul>
        </div>
      </div>
      <p>These cards are in the centre</p>
      <div className="centre-cards">
        <div className="card w125 Troublemaker" data-index="0">
          <header></header>
          <div className="image"></div>
          <footer>
            <div className="description"></div>
            <div className="team"></div>
          </footer>
        </div>
        <div className="card w125 Seer" data-index="1">
          <header></header>
          <div className="image"></div>
          <footer>
            <div className="description"></div>
            <div className="team"></div>
          </footer>
        </div>
        <div className="card w125 Werewolf" data-index="2">
          <header></header>
          <div className="image"></div>
          <footer>
            <div className="description"></div>
            <div className="team"></div>
          </footer>
        </div>
        <div className="has-AlphaWolf">
          <div className="card rotated w125" data-index="3">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
        </div>
      </div>
      <div className="event-log">
        <h2>Event log</h2>
        <div className="template player-role">
          <div className="card w50 Copycat">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <div className="card w50 Doppelgänger">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <div className="card w50 role">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <strong className="name"></strong>
        </div>
        <div className="template seen-centre-cards">
          <div className="centre-cards">
            <div className="card w50" data-index="0">
              <header></header>
              <div className="image"></div>
              <footer>
                <div className="description"></div>
                <div className="team"></div>
              </footer>
            </div>
            <div className="card w50" data-index="1">
              <header></header>
              <div className="image"></div>
              <footer>
                <div className="description"></div>
                <div className="team"></div>
              </footer>
            </div>
            <div className="card w50" data-index="2">
              <header></header>
              <div className="image"></div>
              <footer>
                <div className="description"></div>
                <div className="team"></div>
              </footer>
            </div>
            <div className="has-AlphaWolf">
              <div className="card rotated w50" data-index="3">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className="card w50 template">
          <header></header>
          <div className="image"></div>
          <footer>
            <div className="description"></div>
            <div className="team"></div>
          </footer>
        </div>
        <ol className="events">
          <li>
            <div className="player-role">
              <div className="card w50 Copycat hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Copycat">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">chris</strong>
            </div>{" "}
            copied{" "}
            <div className="seen-centre-cards">
              <div className="centre-cards">
                <div className="card w50" data-index="0">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="card w50 Seer" data-index="1">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="card w50" data-index="2">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="has-AlphaWolf">
                  <div className="card rotated w50" data-index="3">
                    <header></header>
                    <div className="image"></div>
                    <footer>
                      <div className="description"></div>
                      <div className="team"></div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="player-role">
              <div className="card w50 Copycat hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Werewolf">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">jim</strong>
            </div>{" "}
            woke alone and saw{" "}
            <div className="seen-centre-cards">
              <div className="centre-cards">
                <div className="card w50" data-index="0">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="card w50 Seer" data-index="1">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="card w50" data-index="2">
                  <header></header>
                  <div className="image"></div>
                  <footer>
                    <div className="description"></div>
                    <div className="team"></div>
                  </footer>
                </div>
                <div className="has-AlphaWolf">
                  <div className="card rotated w50" data-index="3">
                    <header></header>
                    <div className="image"></div>
                    <footer>
                      <div className="description"></div>
                      <div className="team"></div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="player-role">
              <div className="card w50 Copycat">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Seer">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">chris</strong>
            </div>{" "}
            saw{" "}
            <div className="player-role">
              <div className="card w50 Copycat hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Werewolf">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">jim</strong>
            </div>
          </li>
          <li>
            <div className="player-role">
              <div className="card w50 Copycat hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Robber">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">Mike</strong>
            </div>{" "}
            robbed{" "}
            <div className="player-role">
              <div className="card w50 Copycat hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 Doppelgänger hidden">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <div className="card w50 role Villager">
                <header></header>
                <div className="image"></div>
                <footer>
                  <div className="description"></div>
                  <div className="team"></div>
                </footer>
              </div>
              <strong className="name">chris</strong>
            </div>
          </li>
        </ol>
      </div>
      <div className="base not-spectator">
        <div className="utility-menu-button"></div>
        <div className="info-menu-button"></div>
        <a className="restart only-host btn btn-primary">Restart Game</a>
        <a className="play-again not-host btn btn-primary">Play Again</a>
        <a className="leave btn btn-danger">Leave Game</a>
      </div>
    </section>
  );
}
