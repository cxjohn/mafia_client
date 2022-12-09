import * as Colyseus from "colyseus.js";
import { useState, useEffect } from "react";
import BottomBar from "./layouts/BottomBar";
import Phase, { PhaseType } from "./components/Phase";
import Header from "./layouts/Header";
import JoinRoom from "./components/JoinRoom";
import type { State } from "./types/State";
import type { Player } from "./types/Player";

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
  const [buttonClicked, setButtonClicked] = useState(false);
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [voteTarget, setVoteTarget] = useState<string>();

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
        let count = 0;
        state.players.forEach((player) => {
          if (player.confirmed) count++;
        });
        console.log("count", count);
        setConfirmedCount(count);
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

  useEffect(() => {
    setButtonClicked(false);
  }, [phase]);

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
    setButtonClicked(true);
    // @ts-ignore
    thisRoom?.send("nextPhase");
  };
  const handleVote = (client: string, target: string) => {
    //TODO: room type
    console.log("vote", typeof client, client, typeof target, target);
    // @ts-ignore
    thisRoom?.send("voteForLynch", (client, target));
  };

  return (
    <div className="w-full min-h-screen bg-[#222] text-3xl text-white font-bold">
      {!thisRoom && <Header />}
      {thisRoom ? (
        <div className="pt-8 lg:pt-24">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col px-8">
              <Phase
                phase={phase}
                thisRoom={thisRoom}
                sessionIDs={sessionIDs}
                time={time}
                narration={narration}
                handleVote={handleVote}
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
            sessionIDs={sessionIDs}
            confirmedCount={confirmedCount}
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
