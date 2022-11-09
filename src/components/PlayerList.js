import { useState } from "react";

export default function BasicRoom({ thisRoom, sessionIDs }) {
  return (
    <div>
      <h3>Playas</h3>
      <ol>
        {thisRoom &&
          sessionIDs.map((session, idx) => {
            return (
              <li className="text-left list-decimal list-inside" key={idx}>
                {console.log(thisRoom.state.players[session]?.name)}
                {thisRoom.state.players[session]?.name}
              </li>
            );
          })}
      </ol>
      {console.log("sessionIDs", sessionIDs)}
    </div>
  );
}
