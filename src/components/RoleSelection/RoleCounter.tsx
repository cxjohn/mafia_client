import { useState, useEffect } from "react";
import { RolesType, RoomProps } from "../../types";

interface RoleProps extends RoomProps {
  role: RolesType;
  handleCount: (arg0: string, arg1: number) => void;
  totalCount: number;
}

export default function RoleCounter({
  thisRoom,
  role,
  handleCount,
  totalCount,
}: RoleProps) {
  const [decrementDisabled, setDecrementDisabled] = useState(false);
  const [incrementDisabled, setIncrementDisabled] = useState(false);

  useEffect(() => {
    if (role.count < 1) {
      setDecrementDisabled(true);
    } else {
      setDecrementDisabled(false);
    }
  }, [role.count]);

  useEffect(() => {
    if (
      totalCount >
      Object.keys(Object.fromEntries(thisRoom.state.players)).length - 1
    ) {
      setIncrementDisabled(true);
    } else {
      setIncrementDisabled(false);
    }
  }, [totalCount, thisRoom.state.players]);

  return (
    <div className="flex items-center h-10 w-60 mx-auto mb-1">
      <label className="w-full text-sm font-semibold">{role.label}</label>
      <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
        <button
          onClick={() => handleCount("decrement", role.id)}
          className={`h-full w-20 rounded-l cursor-pointer outline-none ${
            decrementDisabled ? "bg-secondaryBg" : "bg-secondaryText "
          }`}
          disabled={decrementDisabled}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <span className="outline-none focus:outline-none text-center w-full bg-secondaryText font-semibold text-md  md:text-basecursor-default  text-primaryText">
          {role.count}
        </span>
        <button
          onClick={() => handleCount("increment", role.id)}
          className={` h-full w-20 rounded-r cursor-pointer
          ${incrementDisabled ? "bg-secondaryBg" : "bg-secondaryText "}
          `}
          disabled={incrementDisabled}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
