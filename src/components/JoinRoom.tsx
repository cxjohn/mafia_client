import { useState } from "react";

type JoinRoomProps = {
  handleCreateRoom: (e: React.FormEvent<HTMLFormElement>) => void;
  handleJoinRoom: (
    e: React.FormEvent<HTMLFormElement>,
    roomId: string
  ) => Promise<void>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleReconnect: () => void;
};

export default function JoinRoom({
  handleCreateRoom,
  handleJoinRoom,
  name,
  setName,
  handleReconnect,
}: JoinRoomProps) {
  const [roomId, setRoomId] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [mode, setMode] = useState<"create" | "join">("create");

  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && roomId) {
      setIsJoining(true);
      setJoinError(null);
      try {
        await handleJoinRoom(e, roomId);
        setRoomId("");
      } catch (error: any) {
        const errorMessage =
          error?.message ||
          error?.toString() ||
          "Failed to join room. Please check the room code.";
        setJoinError(errorMessage);
      } finally {
        setIsJoining(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-between mx-auto text-center">
      <div className="pt-4 lg:pt-12 px-4">
        <div className="mb-4 flex gap-4 justify-center">
          {mode === "join" ? (
            <button
              onClick={() => {
                setMode("create");
                setJoinError(null);
              }}
              className="border px-4 py-2 transition-all duration-150 font-mono border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent"
            >
              Create Room
            </button>
          ) : (
            <button
              onClick={() => {
                setMode("join");
                setJoinError(null);
              }}
              className="border px-4 py-2 transition-all duration-150 font-mono border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent"
            >
              Join Room
            </button>
          )}
        </div>

        {mode === "create" ? (
          <form className="flex flex-col" onSubmit={handleCreateRoom}>
            <p className="text-terminalFg font-mono mb-2">Enter your name:</p>
            <input
              type="text"
              className="bg-black border border-terminalAccent text-terminalFg caret-terminalAccent px-2 py-1 focus:outline-none focus:shadow-[0_0_8px_#00FF66] w-full max-w-[250px] mx-auto font-mono"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <div>
              <input
                className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer mt-4"
                type="submit"
                value="Create Room"
                disabled={!name}
              />
            </div>
          </form>
        ) : (
          <form className="flex flex-col" onSubmit={handleJoinSubmit}>
            <p className="text-terminalFg font-mono mb-2">Enter your name:</p>
            <input
              type="text"
              className="bg-black border border-terminalAccent text-terminalFg caret-terminalAccent px-2 py-1 focus:outline-none focus:shadow-[0_0_8px_#00FF66] w-full max-w-[250px] mx-auto font-mono mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <p className="text-terminalFg font-mono mb-2">Enter room code:</p>
            <input
              type="text"
              className="bg-black border border-terminalAccent text-terminalFg caret-terminalAccent px-2 py-1 focus:outline-none focus:shadow-[0_0_8px_#00FF66] w-full max-w-[250px] mx-auto font-mono"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Room code"
            />
            {joinError && (
              <p className="text-terminalAlert font-mono text-sm mt-2">
                {joinError}
              </p>
            )}
            <div>
              <input
                className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                value={isJoining ? "Joining..." : "Join Room"}
                disabled={!name || !roomId || isJoining}
              />
            </div>
          </form>
        )}
      </div>

      {localStorage.getItem("sessionId") ? (
        <button
          className="fixed bottom-0 w-full mx-auto border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono"
          onClick={handleReconnect}
        >
          Reconnect
        </button>
      ) : null}
    </div>
  );
}
