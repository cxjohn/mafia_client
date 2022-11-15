import Time from "./Time";

export default function NarrationMorning({ time }: any) {
  return (
    <section id="day">
      <h1>Day has risen...</h1>
      <p className="sun">☀️</p>
      <Time time={time} />
      <div className="not-spectator">
        <p>Discuss what happened in the night</p>
        <p>
          When the time is up, you must vote to kill someone{" "}
          <strong className="werewolf-team">immediately</strong>
        </p>
      </div>
      <div className="only-spectator">
        <p>Players are discussing what happened in the night</p>
        <p>
          When the time is up, they must vote to kill someone{" "}
          <strong className="werewolf-team">immediately</strong>
        </p>
      </div>
      <div className="has-revealer">
        <div className="template player list-group-item">
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
        </div>
        <div className="players list-group complex-list">
          <div className="player list-group-item">
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
          </div>
          <div className="player list-group-item">
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
          </div>
          <div className="player list-group-item">
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
          </div>
          <div className="player list-group-item">
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
          </div>
        </div>
      </div>
      <p>Roles are displayed in wake-up order</p>
      <ol className="card-list">
        <li className="has-Copycat">
          <div className="card w125 Copycat">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Copycat">1</span>
          </p>
        </li>
        <li className="has-Doppelgänger">
          <div className="card w125 Doppelgänger">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Doppelgänger">0</span>
          </p>
        </li>
        <li className="has-Werewolf">
          <div className="card w125 Werewolf">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Werewolf">2</span>
          </p>
        </li>
        <li className="has-GiantWolf">
          <div className="card w125 GiantWolf">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-GiantWolf">0</span>
          </p>
        </li>
        <li className="has-AlphaWolf">
          <div className="card w125 AlphaWolf">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-AlphaWolf">0</span>
          </p>
        </li>
        <li className="has-MysticWolf">
          <div className="card w125 MysticWolf">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-MysticWolf">0</span>
          </p>
        </li>
        <li className="has-Minion">
          <div className="card w125 Minion">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Minion">0</span>
          </p>
        </li>
        <li className="has-ApprenticeTanner">
          <div className="card w125 ApprenticeTanner">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-ApprenticeTanner">0</span>
          </p>
        </li>
        <li className="has-Mason">
          <div className="card w125 Mason">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Mason">0</span>
          </p>
        </li>
        <li className="has-Seer">
          <div className="card w125 Seer">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Seer">1</span>
          </p>
        </li>
        <li className="has-ApprenticeSeer">
          <div className="card w125 ApprenticeSeer">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-ApprenticeSeer">0</span>
          </p>
        </li>
        <li className="has-ParanormalInvestigator">
          <div className="card w125 ParanormalInvestigator">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-ParanormalInvestigator">0</span>
          </p>
        </li>
        <li className="has-Robber">
          <div className="card w125 Robber">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Robber">1</span>
          </p>
        </li>
        <li className="has-Witch">
          <div className="card w125 Witch">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Witch">0</span>
          </p>
        </li>
        <li className="has-Troublemaker">
          <div className="card w125 Troublemaker">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Troublemaker">1</span>
          </p>
        </li>
        <li className="has-AuraSeer">
          <div className="card w125 AuraSeer">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-AuraSeer">0</span>
          </p>
        </li>
        <li className="has-Gremlin">
          <div className="card w125 Gremlin">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Gremlin">0</span>
          </p>
        </li>
        <li className="has-Drunk">
          <div className="card w125 Drunk">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Drunk">0</span>
          </p>
        </li>
        <li className="has-Insomniac">
          <div className="card w125 Insomniac">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Insomniac">0</span>
          </p>
        </li>
        <li className="has-Squire">
          <div className="card w125 Squire">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Squire">0</span>
          </p>
        </li>
        <li className="has-Beholder">
          <div className="card w125 Beholder">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Beholder">0</span>
          </p>
        </li>
        <li className="has-Revealer">
          <div className="card w125 Revealer">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Revealer">0</span>
          </p>
        </li>
        <li className="has-DreamWolf">
          <div className="card w125 DreamWolf">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-DreamWolf">0</span>
          </p>
        </li>
        <li className="has-Villager">
          <div className="card w125 Villager">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Villager">1</span>
          </p>
        </li>
        <li className="has-Tanner">
          <div className="card w125 Tanner">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Tanner">0</span>
          </p>
        </li>
        <li className="has-Hunter">
          <div className="card w125 Hunter">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Hunter">0</span>
          </p>
        </li>
        <li className="has-Bodyguard">
          <div className="card w125 Bodyguard">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Bodyguard">0</span>
          </p>
        </li>
        <li className="has-Prince">
          <div className="card w125 Prince">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Prince">0</span>
          </p>
        </li>
        <li className="has-Cursed">
          <div className="card w125 Cursed">
            <header></header>
            <div className="image"></div>
            <footer>
              <div className="description"></div>
              <div className="team"></div>
            </footer>
          </div>
          <p>
            x<span className="num-Cursed">0</span>
          </p>
        </li>
      </ol>
      <div className="base not-spectator">
        <div className="utility-menu-button"></div>
        <div className="info-menu-button"></div>
        <a className="btn btn-default">Skip to vote</a>
      </div>
    </section>
  );
}
