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
          <p>Enter your name:</p>
          <input
            type="text"
            className="text-black rounded mb-2 border-2 border-black w-full max-w-[250px] mx-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <input
              className="border-2 border-primaryText rounded p-2 cursor-pointer mt-4"
              type="submit"
              value="Join Game"
            />
          </div>
        </form>
      </div>

      {localStorage.getItem("sessionId") ? (
        <button
          className="fixed bottom-0 w-full mx-auto"
          onClick={handleReconnect}
        >
          Reconnect
        </button>
      ) : null}
    </div>
  );
}
