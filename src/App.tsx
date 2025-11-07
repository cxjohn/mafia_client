import * as Colyseus from "colyseus.js";
import { useState, useEffect, useMemo } from "react";
import { GameContext, useGame } from "./GameContext";
import BottomBar from "./layouts/BottomBar";
import Header from "./layouts/Header";
import JoinRoom from "./components/JoinRoom";
import Lobby from "./components/Phases/Lobby";
import Introduction from "./components/Phases/Introduction";
import Night from "./components/Phases/Night";
import NarrationMorning from "./components/Phases/NarrationMorning";
import Voting from "./components/Phases/Voting";
import Conclusion from "./components/Phases/Conclusion";
import type { State } from "./types/State";
import type { Player } from "./types/Player";
import { PhaseType } from "./types";
import type { RoomType, RolesType } from "./types";

// prod server
const client = new Colyseus.Client("wss://149-28-229-164.colyseus.dev");

//dev server
// var host = window.location.host.replace(/:.*/, "");
// var client = new Colyseus.Client(`ws://${host}:2567`);

const roles: RolesType[] = [
  { label: "Mafia", id: 0, count: 0 },
  { label: "Townsperson", id: 1, count: 0 },
  { label: "Angel", id: 2, count: 0 },
  { label: "Detective", id: 3, count: 0 },
];

function GamePhase({
  rolesArray,
  setRolesArray,
}: {
  rolesArray: RolesType[];
  setRolesArray: React.Dispatch<React.SetStateAction<RolesType[]>>;
}) {
  const game = useGame();

  switch (game.phase) {
    case PhaseType.LOBBY:
      return <Lobby rolesArray={rolesArray} setRolesArray={setRolesArray} />;
    case PhaseType.INTRODUCTION:
      return <Introduction />;
    case PhaseType.NIGHT:
      return <Night />;
    case PhaseType.NARRATIONMORNING:
      return <NarrationMorning />;
    case PhaseType.VOTING:
      return <Voting />;
    case PhaseType.NARRATIONLYNCHING:
      return <div>Narration Lynching</div>;
    case PhaseType.CONCLUSION:
      return <Conclusion />;
    default:
      return <div>phase error</div>;
  }
}

export default function App() {
  const [thisRoom, setThisRoom] = useState<RoomType>();
  const [gameState, setGameState] = useState<State | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [time, setTime] = useState<number>();
  const [name, setName] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [rolesArray, setRolesArray] = useState(roles);

  function setupRoom(room: RoomType) {
    const updateGameState = () => {
      setGameState({ ...room.state } as State);
    };

    room.onMessage("messages", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    room.onStateChange((state: State) => {
      console.log("state updated:", state);
      updateGameState();
    });

    room.state.players.onAdd = (player: Player, sessionId: string) => {
      console.log("player added", player, sessionId);
      updateGameState();
    };

    room.state.players.onChange = (player: Player, key: string) => {
      console.log(player, "changed at", key);
      updateGameState();
    };

    room.state.players.onRemove = (player: Player, sessionId: string) => {
      console.log("player removed", player, sessionId);
      updateGameState();
    };

    room.state.listen("countdown", setTime);
  }

  async function createRoom(name: string) {
    try {
      const room: RoomType = await client.create<State>("my_room", {
        name,
      });
      setThisRoom(room);
      setupRoom(room);
      console.log("room created", room);
    } catch (e) {
      console.error("create room error", e);
    }
  }

  async function joinRoom(roomId: string, name: string) {
    try {
      const room: RoomType = await client.joinById<State>(roomId, {
        name,
      });
      setThisRoom(room);
      setupRoom(room);
      console.log("room joined", room);
    } catch (e) {
      console.error("join room error", e);
      throw e; // Re-throw to allow UI to handle error
    }
  }

  async function handleReconnect() {
    const roomId = localStorage.getItem("roomId") ?? "";
    const sessionId = localStorage.getItem("sessionId") ?? "";

    try {
      const room: RoomType = await client.reconnect(roomId, sessionId);
      setThisRoom(room);
      setupRoom(room);

      // Trigger immediate state update
      room.onStateChange.once((state: State) => {
        setGameState(state);
      });

      console.log("Reconnected successfully");
    } catch (e) {
      console.error("reconnection error", e);
    }
  }

  const phase = gameState?.phase ?? PhaseType.LOBBY;

  useEffect(() => {
    setButtonClicked(false);
  }, [phase]);

  useEffect(() => {
    if (thisRoom) {
      localStorage.setItem("roomId", thisRoom.id);
      localStorage.setItem("sessionId", thisRoom.sessionId);
    }
  }, [thisRoom]);

  const rolesNumberArray = useMemo(
    () => rolesArray.flatMap((role) => Array(role.count).fill(role.id)),
    [rolesArray]
  );

  const handleCreateRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      createRoom(name);
      setName("");
    }
  };

  const handleJoinRoom = async (e: React.FormEvent<HTMLFormElement>, roomId: string) => {
    e.preventDefault();
    if (name && roomId) {
      try {
        await joinRoom(roomId, name);
        setName("");
      } catch (error) {
        // Error handling will be done in JoinRoom component
        throw error;
      }
    }
  };

  const handleNext = () => {
    setButtonClicked(true);
    if (phase === PhaseType.LOBBY) {
      thisRoom?.send("setRoles", (thisRoom.sessionId, rolesNumberArray));
    }
    thisRoom?.send("nextPhase");
  };

  const gameContextValue = useMemo(() => {
    if (!thisRoom || !gameState) return null;

    return {
      roomId: thisRoom.id,
      sessionId: thisRoom.sessionId,
      phase: gameState.phase,
      narration: gameState.narration,
      time,
      players: new Map(gameState.players.entries()),
      messages,
      minClients: gameState.minClients,
      send: (type: string, ...args: any[]) => thisRoom.send(type, ...args),
    };
  }, [thisRoom, gameState, time, messages]);

  const currentPlayer = thisRoom && gameState?.players.get(thisRoom.sessionId);
  const isDead =
    currentPlayer && !currentPlayer.alive && phase > 1 && phase < 6;

  return (
    <div className="w-full min-h-screen bg-terminalBg text-terminalFg font-mono">
      {!thisRoom && <Header />}
      {thisRoom && gameContextValue && (
        <GameContext.Provider value={gameContextValue}>
          {isDead && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
              <div className="absolute bottom-1/2 text-9xl font-bold w-full text-center text-terminalAlert animate-flicker">
                u r ded
              </div>
            </div>
          )}
          <div className="pt-8 lg:pt-24">
            <div className="mx-auto max-w-lg text-center">
              <div className="flex flex-col px-8">
                <GamePhase
                  rolesArray={rolesArray}
                  setRolesArray={setRolesArray}
                />
              </div>
            </div>
            <BottomBar handleNext={handleNext} buttonClicked={buttonClicked} />
          </div>
        </GameContext.Provider>
      )}
      {!thisRoom && (
        <JoinRoom
          handleCreateRoom={handleCreateRoom}
          handleJoinRoom={handleJoinRoom}
          name={name}
          setName={setName}
          handleReconnect={handleReconnect}
        />
      )}
      {thisRoom && (
        <div className="fixed top-4 right-4 bg-black border border-terminalAccent px-4 py-2 font-mono text-terminalFg text-sm">
          <div className="text-terminalAccent mb-1">Room Code:</div>
          <div className="text-lg font-bold">{thisRoom.id}</div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(thisRoom.id);
            }}
            className="mt-2 text-xs text-terminalAccent hover:underline"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
