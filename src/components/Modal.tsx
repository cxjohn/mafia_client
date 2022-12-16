import { Transition } from "react-transition-group";
import { ModalProps } from "../types";

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

enum DirectionEnum {
  "left" = "left-0",
  "right" = "right-0",
}

export default function Modal({ isOpen, direction, children }: ModalProps) {
  return (
    <Transition in={isOpen} timeout={500}>
      {(state) => (
        <div
          className={`fixed top-0 ${DirectionEnum[direction]} z-10 h-full w-full max-w-md`}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="fixed bg-black shadow-md w-full h-[calc(100vh-100px)]">
            <div className="h-full flex flex-col justify-between p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
