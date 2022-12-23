import { useState, useEffect } from "react";
import { RoomProps, RolesType } from "../types";
import RoleCounter from "./RoleSelection/RoleCounter";

interface SelectRoleProps extends RoomProps {
  rolesArray: RolesType[];
  setRolesArray: React.Dispatch<React.SetStateAction<RolesType[]>>;
}

export default function SelectRole({
  thisRoom,
  rolesArray,
  setRolesArray,
}: SelectRoleProps) {
  const [totalCount, setTotalCount] = useState(0);

  const handleCount = (action: string, id: number) => {
    const newArr = rolesArray.map((role) => {
      if (role.id !== id) {
        return role;
      } else {
        if (action === "increment") {
          return {
            ...role,
            count: role.count + 1,
          };
        } else if (action === "decrement") {
          return {
            ...role,
            count: role.count - 1,
          };
        } else {
          return null;
        }
      }
    });
    //@ts-ignore
    setRolesArray(newArr);
  };

  useEffect(() => {
    let count = 0;
    rolesArray.forEach((role) => {
      count += role.count;
    });

    setTotalCount(count);
  }, [rolesArray, totalCount]);

  return (
    <div>
      {rolesArray.map((role, idx) => {
        return (
          <div key={idx}>
            <RoleCounter
              thisRoom={thisRoom}
              role={role}
              handleCount={handleCount}
              totalCount={totalCount}
            />
          </div>
        );
      })}
    </div>
  );
}
