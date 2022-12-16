import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import TitleText from "./TitleText";

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
  handleCloseModal: () => void;
  thisRoom: any;
};

export default function InfoModal({
  isOpen,
  handleCloseModal,
  thisRoom,
}: ModalProps) {
  const [mafiaCount, setMafiaCount] = useState(0);
  const [townspersonCount, setTownspersonCount] = useState(0);

  const countRoles = (role: number) => {
    let count = 0;
    Object.values(Object.fromEntries(thisRoom.state.players["$items"])).forEach(
      (item) => {
        if (item.role === role) {
          count++;
        }
      }
    );
    return count;
  };

  const handleDispose = () => {
    // @ts-ignore
    thisRoom?.send("kill");
  };

  useEffect(() => {
    setMafiaCount(countRoles(0));
    setTownspersonCount(countRoles(1));
  }, [thisRoom.state.players, countRoles]);

  return (
    <Transition in={isOpen} timeout={500}>
      {(state) => (
        <div
          className="fixed top-0 left-0 z-10 h-full w-full max-w-md"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="fixed bg-black shadow-md w-full">
            <div className="h-full flex-col justify-between p-4">
              <div className="flex justify-between items-center">
                <h5 className="text-4xl text-white font-semibold">Roles</h5>

                <button onClick={handleCloseModal} className="close">
                  <span className="text-6xl text-white">×</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-12 py-4">
                <div className="flex-col">
                  <div className="bg-white text-black rounded py-2">
                    <div className="text-center">mafia</div>
                    <img
                      className="w-20 mx-auto"
                      src="./images/mafia.webp"
                      alt="mafia icon"
                    />
                  </div>
                  <div className="text-center pt-2">x{mafiaCount}</div>
                </div>
                <div className="flex-col">
                  <div className="bg-white text-black rounded py-2">
                    <div className="text-center">townie</div>
                    <img
                      className="w-20 mx-auto"
                      src="./images/town.webp"
                      alt="townie icon"
                    />
                  </div>
                  <div className="text-center pt-2">x{townspersonCount}</div>
                </div>
              </div>

              <hr />
              <div className="flex flex-col justify-between">
                <h5 className="text-4xl text-white font-semibold pt-8">
                  Rules
                </h5>

                <p className="py-4">
                  The Townspeople win when all the mafia are dead
                </p>
                <p>The Mafia win when all the Townspeople are dead</p>
              </div>
            </div>
            <button
              onClick={handleDispose}
              className="mt-24 text-red-600 text-xs"
            >
              Please don't click this
            </button>
          </div>
        </div>
      )}
    </Transition>
  );
}
