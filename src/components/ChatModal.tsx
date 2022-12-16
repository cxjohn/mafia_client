import Modal from "./Modal";
import PlayerList from "./PlayerList";

type ModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: any;
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
      <div className="flex justify-between items-center p-4">
        <h5 className="text-4xl text-white font-semibold">Player Chat</h5>
        <button onClick={handleCloseModal} className="close">
          <span className="text-6xl text-white">×</span>
        </button>
      </div>
      <div className="flex flex-col justify-between px-4 h-4/5">
        <PlayerList thisRoom={thisRoom} />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="text-white">Enter a message</span>
          <input
            type="text"
            className="text-black rounded mb-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <input
              className="bg-white text-black rounded p-2 cursor-pointer"
              type="submit"
            />
          </div>
        </form>

        <div className="overflow-auto h-[60vh]">
          {messages.map((message, idx) => {
            return (
              <p className="text-white" key={idx}>
                {message}
              </p>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
