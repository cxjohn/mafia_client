import { default as ModalComponent } from "react-modal";
import { Transition } from "react-transition-group";
import ChatModal from "./ChatModal";
import InfoModal from "./InfoModal";

const defaultStyle = {
  transition: `300ms ease-in-out`,
  transform: "translate(100%)",
};

const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { transform: "translate(0%)" },
  entered: { transform: "translate(0%)" },
  exiting: { transform: "translate(100%)" },
  exited: { transform: "translate(100%)" },
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

export default function Modal({
  isOpen,
  modal,
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
          className="fixed top-0 right-0 z-10 w-full"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="fixed bg-white shadow-md w-full">
            {/* <ModalComponent
            isOpen={isOpen}
            className="fixed bg-white shadow-md w-full"
            // className="absolute bg-[#222] w-[90%] h-[90vh] overflow-auto border border-solid border-light-gray rounded translate-x-[-5%] -translate-y-1/2 top-1/2 left-[10%]"
            // closeTimeoutMS={500}
            onRequestClose={handleCloseModal}
            preventScroll={true}
            ariaHideApp={false}
          > */}
            <div className="h-full flex-col justify-between">
              {modal === "chat" && (
                <ChatModal
                  handleCloseModal={handleCloseModal}
                  message={message}
                  messages={messages}
                  setMessage={setMessage}
                  handleSubmit={handleSubmit}
                  thisRoom={thisRoom}
                  sessionIDs={sessionIDs}
                />
              )}
              {modal === "info" && (
                <InfoModal handleCloseModal={handleCloseModal} />
              )}
            </div>
            {/* </ModalComponent> */}
          </div>
        </div>
      )}
    </Transition>
  );
}
