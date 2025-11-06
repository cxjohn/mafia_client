type JoinRoomProps = {
  handleCreateOrJoin: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleReconnect: () => void;
};

export default function JoinRoom({
  handleCreateOrJoin,
  name,
  setName,
  handleReconnect,
}: JoinRoomProps) {
  return (
    <div className="flex flex-col justify-between mx-auto text-center">
      <div className="pt-4 lg:pt-12 px-4">
        <form className="flex flex-col" onSubmit={handleCreateOrJoin}>
          <p className="text-terminalFg font-mono mb-2">Enter your name:</p>
          <input
            type="text"
            className="bg-black border border-terminalAccent text-terminalFg caret-terminalAccent px-2 py-1 focus:outline-none focus:shadow-[0_0_8px_#00FF66] w-full max-w-[250px] mx-auto font-mono"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <input
              className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer mt-4"
              type="submit"
              value="Join Game"
            />
          </div>
        </form>
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
