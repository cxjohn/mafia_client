import { useRef } from "react";
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
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={isOpen} timeout={500}>
      {(state) => (
        <div
          ref={nodeRef}
          className={`fixed top-0 ${DirectionEnum[direction]} z-10 h-full w-full max-w-md`}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="fixed bg-secondaryBg shadow-md w-full h-[calc(100vh-100px)]">
            <div className="h-full flex flex-col justify-between p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
