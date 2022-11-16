import TitleText from "./TitleText";

export default function InfoModal({ handleCloseModal }: any) {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <TitleText text="Roles" />
        <button onClick={handleCloseModal} className="close">
          <span className="text-6xl text-white">×</span>
        </button>
      </div>
      <div className="flex flex-col justify-between px-4">
        <TitleText text="Rules" />
      </div>
    </div>
  );
}
