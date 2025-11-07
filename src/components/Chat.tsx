type ChatProps = {
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Chat({
  message,
  messages,
  setMessage,
  handleSubmit,
}: ChatProps) {
  return (
    <div className="text-terminalFg font-mono">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <span className="mb-2">Enter a message</span>
        <input
          type="text"
          className="bg-black border border-terminalAccent text-terminalFg caret-terminalAccent px-2 py-1 focus:outline-none focus:shadow-[0_0_8px_#00FF66] mb-2 font-mono"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <input
            className="border border-terminalFg text-terminalFg hover:text-black hover:bg-terminalAccent px-4 py-2 transition-all duration-150 font-mono cursor-pointer"
            type="submit"
          />
        </div>
      </form>

      <div className="bg-black border border-terminalAccent p-2 mt-4 text-sm">
        {messages.map((message, idx) => {
          return <p key={idx} className="mb-1">[user@mafia]$ {message}</p>;
        })}
        <span className="animate-blink">█</span>
      </div>
    </div>
  );
}
