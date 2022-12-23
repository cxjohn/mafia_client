import * as Colyseus from "colyseus.js";
import { useState, useEffect } from "react";
import BottomBar from "./layouts/BottomBar";
import Phase, { PhaseType } from "./components/Phase";
import Header from "./layouts/Header";
import JoinRoom from "./components/JoinRoom";
import type { State } from "./types/State";
import type { Player } from "./types/Player";
import type { RoomType, RolesType } from "./types";
import { Role } from "./types/Player";

// prod server
const client = new Colyseus.Client("ws://t7y27k.us-east-vin.colyseus.net:2567");

// //dev server
// var host = window.location.host.replace(/:.*/, "");
// var client = new Colyseus.Client(`ws://${host}:2567`);

const roles: RolesType[] = [
  { label: "Mafia", id: 0, count: 0 },
  { label: "Townsperson", id: 1, count: 0 },
];

export default function App() {
  const [thisRoom, setThisRoom] = useState<RoomType>();
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phase, setPhase] = useState<PhaseType>(PhaseType.LOBBY);
  const [time, setTime] = useState<number>();
  const [narration, setNarration] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [aliveCount, setAliveCount] = useState(0);
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [rolesArray, setRolesArray] = useState(roles);
  const [rolesNumberArray, setRolesNumberArray] = useState<Role[]>([]);

  async function createRoom(name: string) {
    try {
      const room: RoomType = await client.joinOrCreate<State>("my_room", {
        name: name,
      });
      setThisRoom(() => room);
      console.log("room", room);

      room.onMessage("messages", function (message: string) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange((state: State) => {
        console.log("the room state has been updated:", state);
        let alive = 0;
        state.players.forEach((player) => {
          if (player.alive) alive++;
        });
        setAliveCount(alive);
        let count = 0;
        state.players.forEach((player) => {
          if (player.confirmed) count++;
        });
        setConfirmedCount(count);
        setPhase(state.phase);
        setNarration(state.narration);
      });

      room.state.players.onAdd = function (player: Player, sessionId: string) {
        console.log("player added", player, sessionId);
      };

      room.state.players.onChange = (player: Player, key: string) => {
        console.log(player, "have changes at", key);
      };
      room.state.listen("countdown", (time: number) => {
        setTime(time);
      });
    } catch (e) {
      console.error("join error", e);
    }
  }

  async function handleReconnect() {
    const roomId = localStorage.getItem("roomId") ?? "";
    const sessionId = localStorage.getItem("sessionId") ?? "";

    try {
      const room: RoomType = await client.reconnect(roomId, sessionId);
      setThisRoom(() => room);

      setPhase(room.state.phase);
      console.log("Reconnected successfully", room);

      room.onMessage("messages", function (message: string) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange((state: State) => {
        console.log("the room state has been updated:", state);
        let alive = 0;
        state.players.forEach((player) => {
          if (player.alive) alive++;
        });
        setAliveCount(alive);
        let count = 0;
        state.players.forEach((player) => {
          if (player.confirmed) count++;
        });
        setConfirmedCount(count);
        setPhase(state.phase);
        setNarration(state.narration);
      });
    } catch (e) {
      console.error("reconnection error", e);
    }
  }

  useEffect(() => {
    setButtonClicked(false);
  }, [phase]);

  useEffect(() => {
    thisRoom && localStorage.setItem("roomId", thisRoom.id);
    thisRoom && localStorage.setItem("sessionId", thisRoom.sessionId);
  }, [thisRoom, thisRoom?.id, thisRoom?.sessionId]);

  const handleCreateOrJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name !== "") {
      createRoom(name);
      setName("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    thisRoom?.send("message", message);
    setMessage("");
  };

  useEffect(() => {
    let arr: number[] = [];
    rolesArray.forEach((role) => {
      if (role.count > 0) {
        for (let i = 0; i < role.count; i++) {
          arr.push(role.id);
        }
      }
    });
    setRolesNumberArray(arr);
  }, [rolesArray]);

  const handleNext = () => {
    setButtonClicked(true);
    if (thisRoom?.state.phase === PhaseType.LOBBY) {
      // let mafia_count = Math.max(
      //   1,
      //   Math.floor(thisRoom.state.players.size / 5)
      // );
      // // Create the roles array here temporarily. The front end will need a selection menu to select the number of mafia
      // // We are passing an array instead of a number because we will need an array as soon as we introduce roles that aren't mafia.
      // let roles: Array<Role> = Array<Role>(thisRoom.state.players.size);
      // roles.fill(Role.MAFIA, 0, mafia_count);
      // roles.fill(Role.TOWNSPERSON, mafia_count, thisRoom.state.players.size);

      thisRoom?.send("setRoles", (thisRoom.sessionId, rolesNumberArray));
    }
    thisRoom?.send("nextPhase");
  };

  return (
    <div className="w-full min-h-screen bg-primaryBg text-3xl text-primaryText font-bold">
      {!thisRoom ? <Header /> : null}
      {thisRoom ? (
        <>
          <div
            className={`${
              thisRoom &&
              !thisRoom.state.players.get(thisRoom.sessionId)?.alive &&
              phase > 1 &&
              phase < 6
                ? "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-10"
                : ""
            }`}
          >
            {thisRoom &&
            !thisRoom.state.players.get(thisRoom.sessionId)?.alive &&
            phase > 1 &&
            phase < 6 ? (
              <div className="absolute bottom-1/2 text-9xl font-bold w-full text-center">
                u r ded
              </div>
            ) : null}
          </div>
          <div className="pt-8 lg:pt-24">
            <div className="mx-auto max-w-lg text-center">
              <div className="flex flex-col px-8">
                <Phase
                  phase={phase}
                  thisRoom={thisRoom}
                  time={time}
                  narration={narration}
                  setThisRoom={setThisRoom}
                  rolesArray={rolesArray}
                  setRolesArray={setRolesArray}
                />
              </div>
            </div>
            <BottomBar
              phase={phase}
              handleNext={handleNext}
              buttonClicked={buttonClicked}
              message={message}
              messages={messages}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
              thisRoom={thisRoom}
              aliveCount={aliveCount}
              confirmedCount={confirmedCount}
            />
          </div>
        </>
      ) : (
        <JoinRoom
          handleCreateOrJoin={handleCreateOrJoin}
          name={name}
          setName={setName}
          handleReconnect={handleReconnect}
        />
      )}
    </div>
  );
}
