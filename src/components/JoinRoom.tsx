type JoinRoomProps = {
  handleCreateOrJoin: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export default function JoinRoom({
  handleCreateOrJoin,
  name,
  setName,
}: JoinRoomProps) {
  return (
    <div className="mx-auto max-w-lg text-center">
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
              value="Join Room"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
