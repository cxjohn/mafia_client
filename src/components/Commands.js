import { useState } from "react";

export default function BasicRoom({ thisRoom }) {
  function up() {
    thisRoom && thisRoom.send("move", { y: -1 });
  }

  function right() {
    thisRoom && thisRoom.send("move", { x: 1 });
  }

  function down() {
    thisRoom && thisRoom.send("move", { y: 1 });
  }

  function left() {
    thisRoom && thisRoom.send("move", { x: -1 });
  }
  return (
    <div>
      <strong>commands</strong>
      <div className="flex flex-col">
        <div>
          {" "}
          <button
            className="border-2 border-white rounded p-2"
            onClick={() => up()}
          >
            up
          </button>
        </div>
        <div>
          {" "}
          <button
            className="border-2 border-white rounded p-2"
            onClick={() => down()}
          >
            down
          </button>
        </div>
        <div>
          {" "}
          <button
            className="border-2 border-white rounded p-2"
            onClick={() => left()}
          >
            left
          </button>
        </div>
        <div>
          {" "}
          <button
            className="border-2 border-white rounded p-2"
            onClick={() => right()}
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
}
