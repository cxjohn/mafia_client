import * as Colyseus from "colyseus.js";
import { useState } from "react";
import BottomBar from "./layouts/BottomBar";
import Phase, { PhaseType } from "./components/Phase";
import Header from "./layouts/Header";
import JoinRoom from "./components/JoinRoom";
import type { State } from "./types/State";
import type { Player } from "./types/Player";
import Time from "./components/Time";

// const client = new Colyseus.Client("ws://192.168.1.252:2567");

var host = window.location.host.replace(/:.*/, "");

var client = new Colyseus.Client(`ws://${host}:2567`);

export default function App() {
  const [thisRoom, setThisRoom] = useState<State>();
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phase, setPhase] = useState<PhaseType>(PhaseType.LOBBY);
  const [sessionIDs, setSessionIDs] = useState<string[]>([]);
  const [time, setTime] = useState<number>();
  const [narration, setNarration] = useState("");

  async function createRoom(name: string) {
    try {
      //TODO: room type
      const room: any = await client.joinOrCreate<State>("my_room", {
        name: name,
      });
      setThisRoom(() => room);
      console.log("state", room.state);

      room.onMessage("messages", function (message: string) {
        setMessages((messages) => [...messages, message]);
      });

      room.onStateChange.once((state: State) => {
        // setEntered(state.entered);
      });

      room.onStateChange((state: State) => {
        console.log("the room state has been updated:", state);
        setPhase(state.phase);
        setNarration(state.narration);
      });

      room.state.players.onAdd = function (player: Player, sessionId: string) {
        setSessionIDs((sessionIds) => [...sessionIds, sessionId]);
        console.log("player added", player, sessionId);
      };

      room.state.players.onRemove = function (
        player: Player,
        sessionId: string
      ) {
        setSessionIDs((oldIDs) => oldIDs.filter((id) => id !== sessionId));
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

  const handleCreateOrJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createRoom(name);
    setName("");
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
    // @ts-ignore
    thisRoom?.send("nextPhase");
  };

  return (
    <div className="w-full min-h-screen bg-[#222] text-3xl text-white font-bold">
      {!thisRoom && <Header />}
      {thisRoom ? (
        <div className="pt-8 lg:pt-24">
          <div className="mx-auto max-w-md text-center">
            <div className="flex flex-col px-8">
              <Phase
                phase={phase}
                thisRoom={thisRoom}
                sessionIDs={sessionIDs}
                time={time}
                narration={narration}
              />
            </div>
          </div>
          <BottomBar
            handleNext={handleNext}
            message={message}
            messages={messages}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
            thisRoom={thisRoom}
            sessionIDs={sessionIDs}
          />
        </div>
      ) : (
        <JoinRoom
          handleCreateOrJoin={handleCreateOrJoin}
          name={name}
          setName={setName}
        />
      )}
    </div>
  );
}
