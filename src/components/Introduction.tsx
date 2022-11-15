export default function Introduction() {
  return (
    <section>
      <h1>One Night Ultimate Werewolf</h1>
      <p>
        Press <span className="glyphicon"></span> at any time to see the
        cheatsheet.
      </p>
      <p>
        It describes what roles are included in this game, as well as a brief
        explanation of what they do.
      </p>
      <h2>Gameplay</h2>
      <p>
        Each person is given a card, describing their role. Three cards remain
        in the centre.
      </p>
      <p>
        During the night, players perform the action described by their role.
      </p>
      <p>
        During the day, players have a limited amount of time to discuss what
        happened at night, and what roles are assigned to which people.
      </p>
      <p>
        <span className="werewolf-team">
          Your role may have been changed by another player during the night,
        </span>{" "}
        and your new role determines whether you win or not.
      </p>
      <p>
        During the day phase, everybody casts a vote for who to kill. Once the
        day is over, votes are locked in.
        <span className="werewolf-team">
          The player(s) with the most votes die,
        </span>{" "}
        unless everybody votes for a different person, in which case{" "}
        <span className="villager-team">nobody dies</span>.
      </p>
      <p>
        The
        <span className="villager-team">Villager Team</span> wins when at least
        one Werewolf <strong>dies</strong>, or if there are no Werewolves and{" "}
        <strong>nobody dies</strong>.
      </p>
      <p>
        The
        <span className="werewolf-team">Werewolf Team</span> wins when all
        Werewolves avoid death
        <span className="has-tanner">
          , and a<span className="tanner-team">Tanner</span>
          <strong> does not die.</strong>
        </span>
      </p>
      <p className="has-tanner">
        The
        <span className="tanner-team">Tanner Team</span> wins if a{" "}
        <strong>Tanner dies</strong>. Players must also meet their personal win
        condition.
      </p>
      <div className="base not-spectator">
        <div className="utility-menu-button"></div>
        <div className="info-menu-button"></div>
        <a className="btn btn-primary">OK</a>
      </div>
    </section>
  );
}
