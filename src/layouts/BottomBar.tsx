type BottomBarProps = {
  handleNext: () => void;
  handleOpenModal: () => void;
};

export default function BottomBar({
  handleNext,
  handleOpenModal,
}: BottomBarProps) {
  return (
    <div className="fixed bottom-0 w-full bg-black text__shadow py-4">
      <div className="flex justify-center align-baseline">
        <button
          className="border-2 border-white rounded p-2"
          onClick={() => handleNext()}
        >
          next room
        </button>
        <button
          className="absolute -top-12 right-0 bg-black rounded-tl p-2"
          onClick={() => handleOpenModal()}
        >
          <img className="w-8" src="./images/chat.webp" alt="chat" />
        </button>
      </div>
    </div>
  );
}
