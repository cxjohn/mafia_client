import { Room } from "colyseus.js";
import { State } from "./State";

export type RoomType = Room<State>;

export interface RoomProps {
  thisRoom: Room<State>;
}

export interface ModalContentProps extends RoomProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}
export type ModalProps = {
  isOpen: boolean;
  direction: "left" | "right";
  children: React.ReactNode;
};

export type TimeType = number;

export type TimeProps = {
  time?: TimeType;
};
