import { useGame } from "../../GameContext";
import { RolesType } from "../../types";

type RoleProps = {
  role: RolesType;
  handleCount: (arg0: string, arg1: number) => void;
  totalCount: number;
};

export default function RoleCounter({
  role,
  handleCount,
  totalCount,
}: RoleProps) {
  const game = useGame();

  const decrementDisabled = role.count < 1;
  const incrementDisabled = totalCount > game.players.size - 1;

  return (
    <div className="flex items-center h-10 w-60 mx-auto mb-1">
      <label className="w-full text-sm font-mono text-terminalFg">
        {role.label}
      </label>
      <div className="flex flex-row h-10 w-32 relative bg-transparent mt-1 border border-terminalAccent">
        <button
          onClick={() => handleCount("decrement", role.id)}
          className={`h-full w-20 border-r border-terminalAccent cursor-pointer outline-none text-terminalFg font-mono ${
            decrementDisabled
              ? "bg-black opacity-50"
              : "bg-black hover:bg-terminalAccent hover:text-black"
          } transition-all duration-150`}
          disabled={decrementDisabled}
        >
          <span className="m-auto text-2xl">−</span>
        </button>
        <span className="outline-none focus:outline-none text-center w-full bg-black font-mono text-md md:text-base cursor-default text-terminalFg border-r border-terminalAccent">
          {role.count}
        </span>
        <button
          onClick={() => handleCount("increment", role.id)}
          className={`h-full w-20 cursor-pointer text-terminalFg font-mono ${
            incrementDisabled
              ? "bg-black opacity-50"
              : "bg-black hover:bg-terminalAccent hover:text-black"
          } transition-all duration-150`}
          disabled={incrementDisabled}
        >
          <span className="m-auto text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}
