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
      <div className="flex justify-between items-center p-4">
        <h5 className="text-4xl font-semibold">Player Chat</h5>
        <button onClick={handleCloseModal} className="close">
          <span className="text-6xl ">×</span>
        </button>
      </div>
      <div className="px-4">
        <PlayerList thisRoom={thisRoom} />
      </div>
      <div className="flex flex-col justify-between px-4 h-4/5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span>Enter a message</span>
          <input
            type="text"
            className="text-black rounded mb-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <input
              className="bg-primaryText text-black rounded p-2 cursor-pointer"
              type="submit"
            />
          </div>
        </form>

        <div className="overflow-auto h-[60vh] pt-4">
          {messages.map((message, idx) => {
            return <p key={idx}>{message}</p>;
          })}
        </div>
      </div>
    </Modal>
  );
}
