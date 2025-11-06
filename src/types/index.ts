import { Room } from "colyseus.js";
import { State } from "./State";

export type RoomType = Room<State>;

export type ModalProps = {
  isOpen: boolean;
  direction: "left" | "right";
  children: React.ReactNode;
};

export type ModalContentProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export type RolesType = {
  label: string;
  id: number;
  count: number;
};

export enum PhaseType {
  LOBBY,
  INTRODUCTION,
  NIGHT,
  NARRATIONMORNING,
  VOTING,
  NARRATIONLYNCHING,
  CONCLUSION,
}