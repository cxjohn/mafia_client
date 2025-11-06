import Modal from "./Modal";
import PlayerList from "./PlayerList";
import { RoomType } from "../types";

type ModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: RoomType;
};

export default function ChatModal({
  isOpen,
  handleCloseModal,
  message,
  messages,
  setMessage,
  handleSubmit,
  thisRoom,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} direction="right">
      <div className="flex justify-between items-center p-4 border-b border-terminalAccent">
        <h5 className="text-4xl font-mono text-terminalFg">Player Chat</h5>
        <button onClick={handleCloseModal} className="close text-terminalFg hover:text-terminalAlert transition-colors">
          <span className="text-6xl">×</span>
        </button>
      </div>
      <div className="px-4">
        <PlayerList thisRoom={thisRoom} />
      </div>
      <div className="flex flex-col justify-between px-4 h-4/5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="text-terminalFg font-mono mb-2">Enter a message</span>
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

        <div className="overflow-auto h-[60vh] pt-4 bg-black border border-terminalAccent p-2 text-terminalFg font-mono text-sm">
          {messages.map((message, idx) => {
            return <p key={idx} className="mb-1">[user@mafia]$ {message}</p>;
          })}
          <span className="animate-blink">█</span>
        </div>
      </div>
    </Modal>
  );
}
