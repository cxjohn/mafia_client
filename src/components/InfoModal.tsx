export default function InfoModal({ handleCloseModal }: any) {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h3 className="text-4xl text-white font-semibold">Roles</h3>
        <button onClick={handleCloseModal} className="close">
          <span className="text-6xl text-white">×</span>
        </button>
      </div>
      <div className="flex flex-col justify-between px-4 ">
        <h3 className="text-4xl text-white font-semibold">Rules</h3>
      </div>
    </div>
  );
}
