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
    <div className="flex flex-col justify-between mx-auto max-w-lg text-center h-[70vh]">
      <div className="pt-4 lg:pt-12 px-4">
        <form onSubmit={handleCreateOrJoin}>
          Enter your name:
          <input
            type="text"
            className="text-black rounded mb-2 border-2 border-black w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <input
              className="border-2 border-white rounded p-2 cursor-pointer"
              type="submit"
              value="Join Game"
            />
          </div>
        </form>
      </div>

      {sessionStorage.getItem("sessionId") ? (
        <button onClick={handleReconnect}>Reconnect</button>
      ) : null}
    </div>
  );
}
