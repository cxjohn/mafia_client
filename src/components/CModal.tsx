import { Transition } from "react-transition-group";
import ChatModal from "./ChatModal";

const defaultStyle = {
  transition: `300ms ease-in-out`,
  transform: "translate(0%, 100%)",
};

const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { transform: "translate(0%, 0%)" },
  entered: { transform: "translate(0%, 0%)" },
  exiting: { transform: "translate(0%, 100%)" },
  exited: { transform: "translate(0%, 100%)" },
};

type ModalProps = {
  isOpen: boolean;
  modal: string;
  handleCloseModal: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  thisRoom: any;
  sessionIDs: string[];
};

export default function CModal({
  isOpen,
  handleCloseModal,
  message,
  messages,
  setMessage,
  handleSubmit,
  thisRoom,
  sessionIDs,
}: ModalProps) {
  return (
    <Transition in={isOpen} timeout={500}>
      {(state) => (
        <div
          className="fixed top-0 right-0 z-10 h-full w-full max-w-md"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="fixed bg-black shadow-md w-full">
            <div className="h-full flex-col justify-between">
              <ChatModal
                handleCloseModal={handleCloseModal}
                message={message}
                messages={messages}
                setMessage={setMessage}
                handleSubmit={handleSubmit}
                thisRoom={thisRoom}
                sessionIDs={sessionIDs}
              />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
