import { useState } from "react";
import PlayerList from "../components/PlayerList";
import Commands from "../components/Commands";
import Chat from "../components/Chat";

export default function BasicRoom({ client }) {
  const [thisRoom, setThisRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sessionIDs, setSessionIDs] = useState([]);
  const [entered, setEntered] = useState(false);

  async function createRoom(name) {
    try {
      const room = await client.joinOrCreate("my_room", {
        name: name,
      });
      console.log("joined successfully", room);
      setThisRoom(room);
      console.log("state", room.state.players);

      room.onMessage("messages", function (message) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange.once((state) => {
        console.log("this is the first room state!", state);
        setEntered(true);
      });

      room.onStateChange((state) => {
        console.log("the room state has been updated:", state);
      });

      let players = {};
      const colors = ["red", "green", "yellow", "blue", "cyan", "magenta"];

      room.state.players.onAdd = function (player, sessionId) {
        setSessionIDs((sessionIds) => [...sessionIds, sessionId]);
        console.log("player added", player, sessionId);
        var dom = document.createElement("div");
        dom.className = "player";
        dom.style.left = player.x + "px";
        dom.style.top = player.y + "px";
        dom.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        dom.innerText = "Player " + sessionId;

        player.onChange = function (changes) {
          dom.style.left = player.x + "px";
          dom.style.top = player.y + "px";
        };

        players[sessionId] = dom;
        document.body.appendChild(dom);
      };

      room.state.players.onRemove = function (player, sessionId) {
        document.body.removeChild(players[sessionId]);
        setSessionIDs((oldIDs) => oldIDs.filter((id) => id !== sessionId));
        delete players[sessionId];
      };
    } catch (e) {
      console.error("join error", e);
    }
  }

  const handleCreateOrJoin = (event) => {
    event.preventDefault();
    createRoom(name);
    setName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    thisRoom.send("message", message);
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen bg-[#222]">
      <div className="flex justify-center align-baseline shadow-md shadow-gray-400 bg-white p-4">
        <h1 className="text-6xl">
          Mafia (or whatever - it doesn't have to be Mafia. we are very open
          minded)
        </h1>
      </div>
      <div className="pt-8 lg:pt-24 text__shadow text-3xl text-white font-bold w-full text-center">
        {entered ? (
          <div className="flex flex-col lg:flex-row justify-between px-8">
            <PlayerList thisRoom={thisRoom} sessionIDs={sessionIDs} />
            <Commands thisRoom={thisRoom} />

            <Chat
              message={message}
              messages={messages}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
            />
          </div>
        ) : (
          <form onSubmit={handleCreateOrJoin}>
            Enter your name:
            <input
              type="text"
              className="text-black rounded mb-2 border-2 border-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <input
                className="border-2 border-white rounded p-2 cursor-pointer"
                type="submit"
                value="Join Room"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
