import { default as ModalComponent } from "react-modal";
import ChatModal from "./ChatModal";
import InfoModal from "./InfoModal";

type ModalProps = {
  isOpen: boolean;
  modal: string;
  handleCloseModal: () => void;
  message: string;
  messages: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Modal({
  isOpen,
  modal,
  handleCloseModal,
  message,
  messages,
  setMessage,
  handleSubmit,
}: ModalProps) {
  return (
    <ModalComponent
      isOpen={isOpen}
      className="absolute bg-[#222] w-[90%] h-[90vh] overflow-auto border border-solid border-light-gray rounded translate-x-[-5%] -translate-y-1/2 top-1/2 left-[10%]"
      // closeTimeoutMS={500}
      onRequestClose={handleCloseModal}
      preventScroll={true}
      ariaHideApp={false}
    >
      <div className="h-full flex-col justify-between">
        {modal === "chat" && (
          <ChatModal
            handleCloseModal={handleCloseModal}
            message={message}
            messages={messages}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
          />
        )}
        {modal === "info" && <InfoModal handleCloseModal={handleCloseModal} />}
      </div>
    </ModalComponent>
  );
}
