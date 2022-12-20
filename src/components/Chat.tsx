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
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        Enter a message
        <input
          type="text"
          className="text-black rounded mb-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <input
            className="border-2 border-primaryText rounded p-2 cursor-pointer"
            type="submit"
          />
        </div>
      </form>

      <div>
        {messages.map((message, idx) => {
          return <p key={idx}>{message}</p>;
        })}
      </div>
    </div>
  );
}
