import * as Colyseus from "colyseus.js";
import { useState, useEffect } from "react";
import BottomBar from "./layouts/BottomBar";
import Phase, { PhaseType } from "./components/Phase";
import Header from "./layouts/Header";
import JoinRoom from "./components/JoinRoom";
import type { State } from "./types/State";
import type { Player } from "./types/Player";

// // prod server
// const client = new Colyseus.Client("ws://t7y27k.us-east-vin.colyseus.net:2567");

// dev server
var host = window.location.host.replace(/:.*/, "");
var client = new Colyseus.Client(`ws://${host}:2567`);

export default function App() {
  const [thisRoom, setThisRoom] = useState<State>();
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phase, setPhase] = useState<PhaseType>(PhaseType.LOBBY);
  const [time, setTime] = useState<number>();
  const [narration, setNarration] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [aliveCount, setAliveCount] = useState(0);
  const [confirmedCount, setConfirmedCount] = useState(0);

  async function createRoom(name: string) {
    try {
      //TODO: room type
      const room: any = await client.joinOrCreate<State>("my_room", {
        name: name,
      });
      setThisRoom(() => room);
      console.log("state", room);

      room.onMessage("messages", function (message: string) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange.once((state: State) => {
        // setEntered(state.entered);
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
    const roomId = sessionStorage.getItem("roomId") ?? "no room id";
    const sessionId = sessionStorage.getItem("sessionId") ?? "no session id";

    try {
      const room: any = await client.reconnect(roomId, sessionId);
      setThisRoom(() => room);

      console.log("Reconnected successfully!", room.state);
      //@ts-ignore
      console.log(
        "Reconnected room instance phase",
        //@ts-ignore
        room.state.phase
      );
      //@ts-ignore
      setPhase(room.state.phase);
      console.log("Reconnected phase", phase);
      console.log("joined successfully", room);

      room.onMessage("messages", function (message: string) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange.once((state: State) => {
        // setEntered(state.entered);
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
      console.error("join error", e);
    }
  }

  useEffect(() => {
    setButtonClicked(false);
  }, [phase]);

  // useEffect(() => {
  //   console.log("hello");
  //   thisRoom && setPhase(thisRoom.phase);
  // }, [thisRoom && thisRoom.phase]);

  useEffect(() => {
    thisRoom && sessionStorage.setItem("roomId", thisRoom.id);
    thisRoom && sessionStorage.setItem("sessionId", thisRoom.sessionId);
  }, [thisRoom, thisRoom && thisRoom.id, thisRoom && thisRoom.sessionId]);

  const handleCreateOrJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name !== "") {
      createRoom(name);
      setName("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: room type
    // @ts-ignore
    thisRoom?.send("message", message);
    setMessage("");
  };

  const handleNext = () => {
    //TODO: room type
    setButtonClicked(true);
    // @ts-ignore
    thisRoom?.send("nextPhase");
  };

  return (
    <div className="w-full min-h-screen bg-[#222] text-3xl text-white font-bold">
      {!thisRoom ? <Header /> : null}
      {thisRoom ? (
        <>
          <div
            className={`${
              //@ts-ignore
              thisRoom && !thisRoom.state.players[thisRoom.sessionId]?.alive
                ? "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-10"
                : ""
            }`}
          >
            {/* @ts-ignore */}
            {thisRoom && !thisRoom.state.players[thisRoom.sessionId]?.alive ? (
              <div className="absolute bottom-1/2 text-3xl text-white font-bold w-full text-center">
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
