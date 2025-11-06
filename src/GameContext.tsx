import { createContext, useContext } from "react";
import { PhaseType } from "./types";
import type { Player } from "./types/Player";

type GameContextType = {
  roomId: string;
  sessionId: string;
  phase: PhaseType;
  narration: string;
  time?: number;
  players: Map<string, Player>;
  messages: string[];
  minClients: number;
  send: (type: string, ...args: any[]) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

export function useGame() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGame must be used within GameContext.Provider");
  return context;
}
